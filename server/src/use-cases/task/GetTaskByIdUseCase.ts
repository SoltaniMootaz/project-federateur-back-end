import Task from "../../entities/task.js";
import { TaskRepository } from "../../repositories/taskRepository.js";

export class GetTaskByIdUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async getTaskById(taskId: number): Promise<Task> {
    return this.taskRepository.getTaskById(taskId);
  }
}
