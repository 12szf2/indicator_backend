import prisma from "../utils/prisma.js";
import { sendBugReportEmail } from "../utils/mailer.js";
import { enrichUserWithPermissions } from "../utils/permissions.js";

/**
 * Creates a new bug report in the database and sends email notifications to all superadmins.
 * 
 * @param {string} userId - The ID of the user submitting the report
 * @param {Object} bugReportData - The data from the request body
 * @param {Object} reporterInfo - The user info from the token (name, email)
 * @returns {Promise<Object>} The created bug report
 */
export async function createBugReport(userId, bugReportData, reporterInfo) {
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
    // We send emails in parallel, but don't await them to not block the response
    // Or we can await them if we want to ensure they are sent. 
    // Usually it's better to fire and forget for faster API response, but for reliability we await Promise.all
    const emailPromises = superAdmins.map(admin => 
      sendBugReportEmail(admin.email, bugReportData, reporterInfo)
    );
    
    // We catch errors inside the sendBugReportEmail, so Promise.all won't throw
    Promise.all(emailPromises).catch(err => {
      console.error("Error sending bug report emails:", err);
    });
  }

  return bugReport;
}
