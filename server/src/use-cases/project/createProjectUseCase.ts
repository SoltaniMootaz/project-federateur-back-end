import { Project } from "../../entities/project.js";
import { ProjectRepository } from "../../repositories/projectRepository.js";

export class CreateProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async create(project: Project): Promise<Project> {
    const createdProject = await this.projectRepository.createProject(project);
    return createdProject;
  }
}
