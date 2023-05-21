export class GetTaskByIdUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getTaskById(taskId) {
        return this.taskRepository.getTaskById(taskId);
    }
}
//# sourceMappingURL=GetTaskByIdUseCase.js.map