import { AssignMemberToTaskUseCase } from "../../../use-cases/task/AssignMemberToTaskUseCase.js";
import { AssignMemberToTaskController } from "./AssignMemberToTaskController.js";
import { TaskRepository } from "../../../repositories/taskRepository.js";

const taskRepository = new TaskRepository();
const assignMemberToTaskUseCase = new AssignMemberToTaskUseCase(taskRepository);
const assignMemberToTaskController = new AssignMemberToTaskController(
  assignMemberToTaskUseCase
);

export default assignMemberToTaskController as AssignMemberToTaskController;
