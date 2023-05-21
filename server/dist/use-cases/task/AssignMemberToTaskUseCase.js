export class AssignMemberToTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async assignMemberToTask(taskId, userId) {
        await this.taskRepository.assignMemberToTask(taskId, userId);
    }
}
//# sourceMappingURL=AssignMemberToTaskUseCase.js.map