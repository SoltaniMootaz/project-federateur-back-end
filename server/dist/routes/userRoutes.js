import express from "express";
import GetUserProfileController from "../controllers/user/getUserProfileController/index.js";
import GetAllUsersController from "../controllers/user/getAllUsersController/index.js";
const router = express.Router();
// Get user profile route
router.get("/profile/:userId", GetUserProfileController.getProfile);
router.get("/users", GetAllUsersController.getAllUsers);
export default router;
//# sourceMappingURL=userRoutes.js.map