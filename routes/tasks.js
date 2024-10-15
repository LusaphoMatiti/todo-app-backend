import db from "../db.js";
import express from "express";

const router = express.Router();

// Get all tasks from the database

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM tasks");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Make a new task
router.post("/", async (req, res) => {
  const { title, completed, created_at } = req.body;

  try {
    const [results] = await db.query(
      "INSERT INTO tasks (title, completed, created_at) VALUES (?,?,?)",
      [title, completed, created_at]
    );
    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Edit a task
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, created_at } = req.body;

  try {
    const [results] = await db.query(
      "UPDATE tasks SET title = ?, created_at = ? WHERE id = ?",
      [title, created_at, id]
    );
    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM tasks WHERE id = ?", [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
