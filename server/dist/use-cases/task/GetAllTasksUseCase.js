export class GetAllTasksUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAllTasks() {
        return this.taskRepository.getAllTasks();
    }
    async getTasksByProjectId(projectId) {
        return this.taskRepository.getTasksByProjectId(projectId);
    }
}
//# sourceMappingURL=GetAllTasksUseCase.js.map