import { GetTaskByIdUseCase } from "../../../use-cases/task/GetTaskByIdUseCase.js";
import { GetTaskByIdController } from "./GetTaskByIdController.js";
import { TaskRepository } from "../../../repositories/taskRepository.js";

const taskRepository = new TaskRepository();
const getTaskByIdUseCase = new GetTaskByIdUseCase(taskRepository);
const getTaskByIdController = new GetTaskByIdController(getTaskByIdUseCase);

export default getTaskByIdController as GetTaskByIdController;
