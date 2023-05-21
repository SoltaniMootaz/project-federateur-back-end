import { AssignMemberToProjectUseCase } from "../../../use-cases/task/AssignMemberToProjectUseCase.js";
import { AssignMemberToProjectController } from "./AssignMemberToProjectController.js";
import { TaskRepository } from "../../../repositories/taskRepository.js";
const taskRepository = new TaskRepository();
const assignMemberToProjectUseCase = new AssignMemberToProjectUseCase(taskRepository);
const assignMemberToProjectController = new AssignMemberToProjectController(assignMemberToProjectUseCase);
export default assignMemberToProjectController;
//# sourceMappingURL=index.js.map