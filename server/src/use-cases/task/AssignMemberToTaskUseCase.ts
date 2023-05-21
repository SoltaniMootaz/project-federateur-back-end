import { TaskRepository } from "../../repositories/taskRepository.js";

export class AssignMemberToTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async assignMemberToTask(taskId: number, userId: number): Promise<void> {
    await this.taskRepository.assignMemberToTask(taskId, userId);
  }
}
