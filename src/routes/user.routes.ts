import express from "express";
import { authenticateToken } from "../middlewares/authenticateToken";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller";

const router = express.Router();

// Create a new user
router.post("/", createUser);

// Get all users
router.get("/", authenticateToken, getAllUsers);

// Get a user
router.get("/:id", authenticateToken, getUserById);

// Update a user
router.put("/:id", authenticateToken, updateUser);

// Delete a user
router.delete("/:id", authenticateToken, deleteUser);

export default router;
