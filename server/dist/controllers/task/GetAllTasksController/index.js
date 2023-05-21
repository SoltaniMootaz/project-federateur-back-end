import { GetAllTasksUseCase } from "../../../use-cases/task/GetAllTasksUseCase.js";
import { GetAllTasksController } from "./GetAllTasksController.js";
import { TaskRepository } from "../../../repositories/taskRepository.js";
const taskRepository = new TaskRepository();
const getAllTasksUseCase = new GetAllTasksUseCase(taskRepository);
const getAllTasksController = new GetAllTasksController(getAllTasksUseCase);
export default getAllTasksController;
//# sourceMappingURL=index.js.map