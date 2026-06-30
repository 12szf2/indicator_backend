import express from "express";
import { createBugReport } from "../services/bugReport.service.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: BugReports
 *   description: Bug report endpoints
 *
 * /bug-report:
 *   post:
 *     summary: Submit a new bug report
 *     description: Submit a new bug report. Will send email to superadmins and save to database.
 *     tags: [BugReports]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               severity:
 *                 type: string
 *                 enum: [low, medium, high]
 *               stepsToReproduce:
 *                 type: string
 *               pageUrl:
 *                 type: string
 *               userAgent:
 *                 type: string
 *     responses:
 *       201:
 *         description: Bug report successfully submitted
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
 */
router.post("/", async (req, res) => {
  try {
    const { title, description, severity, stepsToReproduce, pageUrl, userAgent } = req.body;
    
    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ 
        message: "Title and description are required fields." 
      });
    }

    // req.user is set by authMiddleware
    if (!req.user || !req.user.id) {
      return res.status(401).json({ 
        message: "Unauthorized: User information not found in token." 
      });
    }

    const reporterInfo = {
      name: req.user.name || "Unknown User",
      email: req.user.email || "No email"
    };

    const bugReportData = {
      title,
      description,
      severity,
      stepsToReproduce,
      pageUrl,
      userAgent
    };

    await createBugReport(req.user.id, bugReportData, reporterInfo);

    return res.status(201).json({ 
      message: "Hibabejelentés sikeresen elküldve." 
    });
  } catch (error) {
    console.error("Error creating bug report:", error);
    return res.status(500).json({ 
      message: "Hiba történt a bejelentés küldése során. Kérjük, próbálja újra később." 
    });
  }
});

export default router;
