import { Project } from "../../entities/project.js";
import { ProjectRepository } from "../../repositories/projectRepository.js";

export class GetTeamAssignedToProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async findTeam(projectId: number): Promise<any[]> {
    const Project = await this.projectRepository.getTeamByProjectId(projectId);
    return Project;
  }
}
