export class AssignMemberToProjectUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async assignMember(projectId, userId) {
        await this.taskRepository.assignMemberToProject(projectId, userId);
    }
}
//# sourceMappingURL=AssignMemberToProjectUseCase.js.map