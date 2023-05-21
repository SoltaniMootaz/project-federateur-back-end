import { UpdateTaskUseCase } from "../../../use-cases/task/UpdateTaskUseCase.js";
import { UpdateTaskController } from "./UpdateTaskController.js";
import { TaskRepository } from "../../../repositories/taskRepository.js";

const taskRepository = new TaskRepository();
const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export default updateTaskController as UpdateTaskController;
