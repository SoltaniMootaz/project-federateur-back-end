import { DeleteTaskUseCase } from "../../../use-cases/task/DeleteTaskUseCase.js";
import { DeleteTaskController } from "./DeleteTaskController.js";
import { TaskRepository } from "../../../repositories/taskRepository.js";
const taskRepository = new TaskRepository();
const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);
export default deleteTaskController;
//# sourceMappingURL=index.js.map