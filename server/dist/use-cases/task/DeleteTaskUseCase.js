export class DeleteTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async deleteTask(taskId) {
        await this.taskRepository.deleteTask(taskId);
    }
}
//# sourceMappingURL=DeleteTaskUseCase.js.map