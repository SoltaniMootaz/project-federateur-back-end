import { ProjectRepository } from "../../../repositories/projectRepository.js";
import { DeleteProjectUseCase } from "../../../use-cases/project/deleteProjectUseCase.js";
import { DeleteProjectController } from "./DeleteProjectController.js";

const projectRepository = new ProjectRepository();
const deleteProjectUseCase = new DeleteProjectUseCase(projectRepository);
const deleteProjectController = new DeleteProjectController(
  deleteProjectUseCase
);

export default deleteProjectController as DeleteProjectController;
