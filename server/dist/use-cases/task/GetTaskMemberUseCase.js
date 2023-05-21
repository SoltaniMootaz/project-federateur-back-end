export class GetTaskMemberUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getTaskMember(taskId) {
        return this.taskRepository.getTaskMember(taskId);
    }
}
//# sourceMappingURL=GetTaskMemberUseCase.js.map