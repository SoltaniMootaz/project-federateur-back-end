export class UpdateTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async updateTask(task) {
        await this.taskRepository.updateTask(task);
    }
}
//# sourceMappingURL=UpdateTaskUseCase.js.map