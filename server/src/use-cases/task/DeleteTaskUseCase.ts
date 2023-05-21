import { TaskRepository } from "../../repositories/taskRepository.js";

export class DeleteTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async deleteTask(taskId: number): Promise<void> {
    await this.taskRepository.deleteTask(taskId);
  }
}
