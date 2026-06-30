import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter using SMTP settings from environment variables
const transporter = nodemailer.createTransport({
  pool: true,
  maxConnections: 1, // Fix for "Concurrent connections limit exceeded" on Outlook
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "user@example.com",
    pass: process.env.SMTP_PASS || "password",
  },
});

/**
 * Sends a bug report email to the given recipients using BCC.
 * If SMTP configuration is missing or invalid, it will log the email content to the console (Mock mode).
 * 
 * @param {string|string[]} bccList - The recipient email addresses (BCC)
 * @param {Object} bugReportData - The bug report details
 * @param {Object} reporterInfo - Information about the reporter (name, email)
 */
export async function sendBugReportEmail(bccList, bugReportData, reporterInfo) {
  const { title, description, severity, stepsToReproduce, pageUrl, userAgent } = bugReportData;
  const { name, email } = reporterInfo;

  const subject = `Indikátor Rendszer - Hibabejelentés - ${severity} - ${title}`;
  
  const textContent = `Új hibabejelentés érkezett az Indikátor rendszerben.

Bejelentő: ${name} (${email})
URL: ${pageUrl || "Nem adta meg"}
Súlyosság: ${severity}

Hiba megnevezése:
${title}

Részletes leírás:
${description}

Reprodukálás lépései:
${stepsToReproduce || "Nem adta meg"}

Böngésző / Rendszer:
${userAgent || "Nem adta meg"}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2 style="color: #d32f2f;">Új hibabejelentés érkezett</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; width: 150px;"><strong>Bejelentő:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name} (${email})</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Súlyosság:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">
            <span style="padding: 4px 8px; border-radius: 4px; background-color: ${
              severity === 'high' ? '#ffcdd2' : severity === 'medium' ? '#fff9c4' : '#c8e6c9'
            };">${severity}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>URL:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${pageUrl || "Nem adta meg"}</td>
        </tr>
      </table>

      <h3 style="margin-top: 25px;">${title}</h3>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        <h4 style="margin-top: 0; margin-bottom: 10px;">Leírás:</h4>
        <p style="white-space: pre-wrap; margin: 0;">${description}</p>
      </div>

      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        <h4 style="margin-top: 0; margin-bottom: 10px;">Reprodukálás lépései:</h4>
        <p style="white-space: pre-wrap; margin: 0;">${stepsToReproduce || "Nem adta meg"}</p>
      </div>

      <div style="margin-top: 20px; font-size: 0.9em; color: #666;">
        <strong>Böngésző / Rendszer:</strong><br>
        ${userAgent || "Nem adta meg"}
      </div>
    </div>
  `;

  // Check if SMTP is actually configured
  if (!process.env.SMTP_HOST || process.env.SMTP_HOST === "smtp.example.com") {
    console.log("========== MOCK BUG REPORT EMAIL SENT ==========");
    console.log(`BCC: ${Array.isArray(bccList) ? bccList.join(", ") : bccList}`);
    console.log(`Subject: ${subject}`);
    console.log(textContent);
    console.log("=================================================");
    return;
  }

  try {
    const sender = process.env.SMTP_FROM || process.env.SMTP_USER || '"Indikátor Rendszer" <noreply@example.com>';
    await transporter.sendMail({
      from: sender,
      to: sender, // Send to self to avoid spam filters filtering out emails without a "to" address
      bcc: bccList,
      subject,
      text: textContent,
      html: htmlContent,
    });
    console.log(`Bug report email sent via BCC to: ${Array.isArray(bccList) ? bccList.join(", ") : bccList}`);
  } catch (error) {
    console.error("Error sending bug report email:", error);
    // Don't throw here to avoid failing the API request if only one email fails
  }
}
