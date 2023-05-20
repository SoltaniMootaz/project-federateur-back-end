import { ProjectRepository } from "../../../repositories/projectRepository.js";
import { UpdateProjectUseCase } from "../../../use-cases/project/updateProjectUseCase.js";
import { UpdateProjectController } from "./UpdateProjectController.js";

const projectRepository = new ProjectRepository();
const updateProjectUseCase = new UpdateProjectUseCase(projectRepository);
const updateProjectController = new UpdateProjectController(
  updateProjectUseCase
);

export default updateProjectController as UpdateProjectController;
