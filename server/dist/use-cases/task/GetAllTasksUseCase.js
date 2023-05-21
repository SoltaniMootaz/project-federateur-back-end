export class GetAllTasksUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAllTasks() {
        return this.taskRepository.getAllTasks();
    }
}
//# sourceMappingURL=GetAllTasksUseCase.js.map