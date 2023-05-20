import express from "express";
import GetUserProfileController from "../controllers/user/getUserProfileController/index.js";

const router = express.Router();
// Get user profile route
router.get("/profile/:userId", GetUserProfileController.getProfile);

export default router;
