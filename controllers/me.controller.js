import e from "express";
import {
  updatePassword,
  updatePersonalInformation,
} from "../services/user.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Me
 *   description: Current user management endpoints
 */

/**
 * @swagger
 * /me/personal:
 *   put:
 *     summary: Update current user's personal information
 *     description: Update the name and email of the currently logged-in user
 *     tags: [Me]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *                 description: User full name
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *                 description: User email address
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Profile updated successfully
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.put("/personal", async (req, res) => {
  const { id } = req.user;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  try {
    const updatedUser = await updatePersonalInformation(id, name, email);
    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
      },
    });
  } catch (error) {
    console.error("Error updating personal information:", error);
    // Handle unique constraint error for email if it comes from Prisma
    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      return res
        .status(400)
        .json({ message: "Email is already in use by another account" });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * @swagger
 * /me/password:
 *   put:
 *     summary: Change current user's password
 *     description: Change the password for the currently logged-in user
 *     tags: [Me]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - newPassword
 *               - newPasswordConfirm
 *             properties:
 *               newPassword:
 *                 type: string
 *                 format: password
 *                 example: newSecurePassword123
 *                 description: New password
 *               newPasswordConfirm:
 *                 type: string
 *                 format: password
 *                 example: newSecurePassword123
 *                 description: Confirmation of new password
 *     responses:
 *       200:
 *         description: Password updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Password updated successfully
 *       400:
 *         description: Passwords do not match or invalid format
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.put("/password", async (req, res) => {
  const { id } = req.user;
  const { newPassword, newPasswordConfirm } = req.body;

  if (!newPassword || !newPasswordConfirm) {
    return res
      .status(400)
      .json({ message: "Both password fields are required" });
  }

  try {
    await updatePassword(id, newPassword, newPasswordConfirm);
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    if (error.message === "Passwords do not match") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
