import express from "express";
import _registerController from "../controllers/auth/RegisterController/index.js";
import _loginController from "../controllers/auth/LoginController/index.js";

const router = express.Router();
// Register route
router.post("/register", _registerController.register);

// Login route
router.post("/login", _loginController.login);

export default router;
