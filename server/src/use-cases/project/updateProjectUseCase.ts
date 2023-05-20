import { Project } from "../../entities/project.js";
import { ProjectRepository } from "../../repositories/projectRepository.js";

export class UpdateProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async update(project: Project): Promise<Project> {
    const updatedProject = await this.projectRepository.updateProject(project);
    return updatedProject;
  }
}
