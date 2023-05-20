import { ProjectRepository } from "../../../repositories/projectRepository.js";
import { GetProjectByIdUseCase } from "../../../use-cases/project/getProjectByIdUseCase.js";
import { GetProjectByIdController } from "./GetProjectByIdController.js";

const projectRepository = new ProjectRepository();
const getProjectByIdUseCase = new GetProjectByIdUseCase(projectRepository);
const getProjectByIdController = new GetProjectByIdController(
  getProjectByIdUseCase
);

export default getProjectByIdController as GetProjectByIdController;
