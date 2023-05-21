import { TaskRepository } from "../../repositories/taskRepository.js";

export class AssignMemberToProjectUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async assignMember(projectId: number, userId: number): Promise<void> {
    await this.taskRepository.assignMemberToProject(projectId, userId);
  }
}
