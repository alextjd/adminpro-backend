import express from "express";

import {
  getAllUsersCtrl,
  createUserCtrl,
} from "../controllers/user.controller";

const router = express.Router();

// Get all users
router.get("/", getAllUsersCtrl);
// Create user
router.post("/", createUserCtrl);

export default router;
