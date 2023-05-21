import Task from "../../entities/task.js";
import { TaskRepository } from "../../repositories/taskRepository.js";

export class CreateNewTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async createTask(task: Task): Promise<void> {
    await this.taskRepository.createNewTask(task);
  }
}
