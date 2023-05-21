import express from "express";
import AssignMemberToProjectController from "../controllers/task/AssignMemberToProjectController/index.js";
import CreateNewTaskController from "../controllers/task/CreateNewTaskController/index.js";
import UpdateTaskController from "../controllers/task/UpdateTaskController/index.js";
import DeleteTaskController from "../controllers/task/DeleteTaskController/index.js";
import GetAllTasksController from "../controllers/task/GetAllTasksController/index.js";
import GetTaskByIdController from "../controllers/task/GetTaskByIdController/index.js";
import AssignMemberToTaskController from "../controllers/task/AssignMemberToTaskController/index.js";
import GetTaskMemberController from "../controllers/task/GetTaskMemberController/index.js";

const router = express.Router();

// Assign member to project
router.post(
  "/projects/assign-member",
  AssignMemberToProjectController.assignMemberToProject
);

// Create new task
router.post("/tasks", CreateNewTaskController.createNewTask);

// Update task
router.post("/tasks/update/:taskId", UpdateTaskController.updateTask);

// Delete task
router.delete("/tasks/delete/:taskId", DeleteTaskController.deleteTask);

// Get all tasks
router.get("/tasks", GetAllTasksController.getAllTasks);

// Get all tasks
router.get("/:projectId/tasks", GetAllTasksController.getTasksByProjectId);

// Get task by ID
router.get("/tasks/:taskId", GetTaskByIdController.getTaskById);

// Assign member to task
router.post(
  "/tasks/:taskId/assign-member",
  AssignMemberToTaskController.assignMemberToTask
);

// Get task member
router.get("/tasks/:taskId/member", GetTaskMemberController.getTaskMember);

export default router;
