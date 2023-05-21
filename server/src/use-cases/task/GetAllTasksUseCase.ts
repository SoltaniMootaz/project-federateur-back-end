import Task from "../../entities/task.js";
import { TaskRepository } from "../../repositories/taskRepository.js";

export class GetAllTasksUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.getAllTasks();
  }
}
