export class CreateNewTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async createTask(task) {
        await this.taskRepository.createNewTask(task);
    }
}
//# sourceMappingURL=CreateNewTaskUseCase.js.map