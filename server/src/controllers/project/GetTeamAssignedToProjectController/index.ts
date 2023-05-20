import { ProjectRepository } from "../../../repositories/projectRepository.js";
import { GetTeamAssignedToProjectUseCase } from "../../../use-cases/project/getTeamAssignedToProjectUseCase.js";
import { GetTeamAssignedToProjectController } from "./GetTeamAssignedToProjectController.js";

const projectRepository = new ProjectRepository();
const getTeamAssignedToProjectUseCase = new GetTeamAssignedToProjectUseCase(
  projectRepository
);
const getTeamAssignedToProjectController =
  new GetTeamAssignedToProjectController(getTeamAssignedToProjectUseCase);

export default getTeamAssignedToProjectController as GetTeamAssignedToProjectController;
