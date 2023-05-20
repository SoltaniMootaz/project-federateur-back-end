import { Project } from "../../entities/project.js";
import { ProjectRepository } from "../../repositories/projectRepository.js";

export class GetProjectByIdUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async findById(projectId: number): Promise<Project> {
    const Project = await this.projectRepository.getProjectById(projectId);
    return Project;
  }
}
