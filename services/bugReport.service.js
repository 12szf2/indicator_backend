import prisma from "../utils/prisma.js";
import { sendBugReportEmail } from "../utils/mailer.js";
import { enrichUserWithPermissions } from "../utils/permissions.js";

/**
 * Creates a new bug report in the database and sends email notifications to all superadmins.
 * 
 * @param {string} userId - The ID of the user submitting the report
 * @param {Object} bugReportData - The data from the request body
 * @param {Object} reporterInfo - The user info from the token (name, email)
 * @param {Object} [attachment] - Optional file attachment (from multer)
 * @returns {Promise<Object>} The created bug report
 */
export async function createBugReport(userId, bugReportData, reporterInfo, attachment = null) {
  // 1. Save to database
  const bugReport = await prisma.bugReport.create({
    data: {
      userId,
      title: bugReportData.title,
      description: bugReportData.description,
      severity: bugReportData.severity || "medium",
      stepsToReproduce: bugReportData.stepsToReproduce || null,
      pageUrl: bugReportData.pageUrl || null,
      userAgent: bugReportData.userAgent || null,
    }
  });

  // 2. Find all superadmin users
  // We fetch all active users and filter them using our permissions utility
  const activeUsers = await prisma.user.findMany({
    where: { isActive: true },
    select: { id: true, email: true, name: true, permissions: true }
  });

  const superAdmins = activeUsers.filter(user => {
    const enrichedUser = enrichUserWithPermissions(user);
    return enrichedUser.permissionsDetails.isSuperadmin;
  });

  // 3. Send emails
  if (superAdmins.length > 0) {
    const bccList = superAdmins.map(admin => admin.email);
    
    // We send a single email with all superadmins in BCC
    sendBugReportEmail(bccList, bugReportData, reporterInfo, attachment).catch(err => {
      console.error("Error sending bug report emails:", err);
    });
  }

  return bugReport;
}
