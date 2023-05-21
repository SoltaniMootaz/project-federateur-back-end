import Task from "../../entities/task.js";
import { TaskRepository } from "../../repositories/taskRepository.js";

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async updateTask(task: Task): Promise<void> {
    await this.taskRepository.updateTask(task);
  }
}
