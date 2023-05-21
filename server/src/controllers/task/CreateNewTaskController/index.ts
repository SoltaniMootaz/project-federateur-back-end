import { CreateNewTaskUseCase } from "../../../use-cases/task/CreateNewTaskUseCase.js";
import { CreateNewTaskController } from "./CreateNewTaskController.js";
import { TaskRepository } from "../../../repositories/taskRepository.js";

const taskRepository = new TaskRepository();
const createNewTaskUseCase = new CreateNewTaskUseCase(taskRepository);
const createNewTaskController = new CreateNewTaskController(
  createNewTaskUseCase
);

export default createNewTaskController as CreateNewTaskController;
