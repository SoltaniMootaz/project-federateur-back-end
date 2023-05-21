export class GetAllTasksController {
    constructor(getAllTasksUseCase) {
        this.getAllTasksUseCase = getAllTasksUseCase;
        this.getAllTasks = async (req, res) => {
            const tasks = await this.getAllTasksUseCase.getAllTasks();
            res.status(200).json(tasks);
        };
    }
}
//# sourceMappingURL=GetAllTasksController.js.map