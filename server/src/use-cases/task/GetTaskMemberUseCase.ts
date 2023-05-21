import user from "../../entities/user.js";
import { TaskRepository } from "../../repositories/taskRepository.js";

export class GetTaskMemberUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async getTaskMember(taskId: number): Promise<user> {
    return this.taskRepository.getTaskMember(taskId);
  }
}
