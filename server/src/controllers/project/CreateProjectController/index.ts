import { CreateProjectUseCase } from "../../../use-cases/project/createProjectUseCase.js";
import { CreateProjectController } from "./CreateProjectController.js";
import { ProjectRepository } from "../../../repositories/projectRepository.js";

const projectRepository = new ProjectRepository();
const createProjectUseCase = new CreateProjectUseCase(projectRepository);
const createProjectController = new CreateProjectController(
  createProjectUseCase
);

export default createProjectController as CreateProjectController;
