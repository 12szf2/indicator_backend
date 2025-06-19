import e from "express";
import { create, getAll } from "../services/user.service.js";

const router = e.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const data = await getAll();
    const user = data.find((user) => user.email === email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const { email, name, password, permissions, tableAccess, alapadatok_id } =
    req.body;
  try {
    await create(
      email,
      name,
      password,
      permissions,
      tableAccess,
      alapadatok_id
    );
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { email, name, password, permissions, tableAccess, alapadatok_id } =
    req.body;
  try {
    await update(
      id,
      email,
      name,
      password,
      permissions,
      tableAccess,
      alapadatok_id
    );
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
