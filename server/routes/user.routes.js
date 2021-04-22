import express from "express";

import { getAllUsers, createUser } from "../controllers/user.controller";

const router = express.Router();

// Get all users
router.get("/", getAllUsers);
// Create user
router.post("/", createUser);

export default router;
