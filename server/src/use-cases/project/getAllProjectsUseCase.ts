import { Project } from "../../entities/project.js";
import { ProjectRepository } from "../../repositories/projectRepository.js";

export class GetAllProjectsUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async findAll(): Promise<Project[]> {
    const Projects = await this.projectRepository.getAllProjects();
    return Projects;
  }
}
