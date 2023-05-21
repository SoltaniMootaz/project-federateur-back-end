import express from "express";
import GetProjectByIdController from "../controllers/project/GetProjectByIdController/index.js";
import GetAllProjectsController from "../controllers/project/GetAllProjectsController/index.js";
import CreateProjectController from "../controllers/project/CreateProjectController/index.js";
import GetTeamAssignedToProjectController from "../controllers/project/GetTeamAssignedToProjectController/index.js";
import DeleteProjectController from "../controllers/project/DeleteProjectController/index.js";
import UpdateProjectController from "../controllers/project/UpdateProjectController/index.js";
const router = express.Router();
// Get user profile route
router.get("/projects/:projectId", GetProjectByIdController.findById);
router.get("/projects", GetAllProjectsController.findAll);
router.get("/projects/team/:projectId", GetTeamAssignedToProjectController.findTeam);
router.post("/projects/", CreateProjectController.create);
router.put("/projects/delete/:projectId", DeleteProjectController.delete);
router.put("/projects/update/:projectId", UpdateProjectController.update);
export default router;
//# sourceMappingURL=projectRoutes.js.map