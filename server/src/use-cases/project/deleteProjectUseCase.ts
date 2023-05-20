import { Project } from "../../entities/project.js";
import { ProjectRepository } from "../../repositories/projectRepository.js";

export class DeleteProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async delete(projectId: number): Promise<any> {
    return await this.projectRepository.deleteProject(projectId);
  }
}
