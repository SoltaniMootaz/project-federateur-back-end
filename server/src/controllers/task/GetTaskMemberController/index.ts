import { GetTaskMemberUseCase } from "../../../use-cases/task/GetTaskMemberUseCase.js";
import { GetTaskMemberController } from "./GetTaskMemberController.js";
import { TaskRepository } from "../../../repositories/taskRepository.js";

const taskRepository = new TaskRepository();
const getTaskMemberUseCase = new GetTaskMemberUseCase(taskRepository);
const getTaskMemberController = new GetTaskMemberController(
  getTaskMemberUseCase
);

export default getTaskMemberController as GetTaskMemberController;
