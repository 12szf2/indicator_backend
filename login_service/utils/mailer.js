import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter using SMTP settings from environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "user@example.com",
    pass: process.env.SMTP_PASS || "password",
  },
});

/**
 * Sends a temporary password email to the user.
 * If SMTP configuration is missing or invalid, it will log the email content to the console (Mock mode).
 * 
 * @param {string} to - The recipient email address
 * @param {string} name - The recipient's name
 * @param {string} temporaryPassword - The generated temporary password
 */
export async function sendTemporaryPasswordEmail(to, name, temporaryPassword) {
  const subject = "Indikátor Rendszer - Ideiglenes Jelszó";
  
  const textContent = `Kedves ${name}!

Kérésedre egy új ideiglenes jelszót generáltunk a fiókodhoz.

Az ideiglenes jelszavad: ${temporaryPassword}

Kérjük, vedd figyelembe a következő fontos biztonsági szempontokat:
- Ezzel az ideiglenes jelszóval bejelentkezve KÖTELEZŐ új jelszót beállítanod a "Profil szerkesztése" menüpontban.
- Ez a jelszó egyszer használatos.
- Biztonsági okokból kérjük, ne oszd meg senkivel!

Üdvözlettel,
Az Indikátor Rendszer Csapata`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2>Kedves ${name}!</h2>
      <p>Kérésedre egy új ideiglenes jelszót generáltunk a fiókodhoz.</p>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center;">
        <span style="font-size: 24px; font-weight: bold; letter-spacing: 2px;">${temporaryPassword}</span>
      </div>

      <p>Kérjük, vedd figyelembe a következő fontos biztonsági szempontokat:</p>
      <ul>
        <li>Ezzel az ideiglenes jelszóval bejelentkezve <strong>KÖTELEZŐ</strong> új jelszót beállítanod a rendszerben.</li>
        <li>Ez a jelszó <strong>egyszer használatos</strong>.</li>
        <li>Biztonsági okokból kérjük, ne oszd meg senkivel!</li>
      </ul>

      <p style="margin-top: 30px; color: #666;">
        Üdvözlettel,<br>
        <strong>Az Indikátor Rendszer Csapata</strong>
      </p>
    </div>
  `;

  // Check if SMTP is actually configured
  if (!process.env.SMTP_HOST) {
    console.log("========== MOCK EMAIL SENT ==========");
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Temporary Password: ${temporaryPassword}`);
    console.log("=====================================");
    return;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Indikátor Rendszer" <noreply@example.com>',
      to,
      subject,
      text: textContent,
      html: htmlContent,
    });
    console.log(`Temporary password email sent to ${to}`);
  } catch (error) {
    console.error("Error sending temporary password email:", error);
    // Depending on requirements, we might want to throw the error or just log it.
    // Throwing ensures the calling function knows the email failed.
    throw new Error("Failed to send email");
  }
}
