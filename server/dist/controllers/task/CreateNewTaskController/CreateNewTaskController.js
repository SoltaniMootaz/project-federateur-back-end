export class CreateNewTaskController {
    constructor(createNewTaskUseCase) {
        this.createNewTaskUseCase = createNewTaskUseCase;
        this.createNewTask = async (req, res) => {
            const task = req.body;
            // Validate task properties if needed
            const createdTask = await this.createNewTaskUseCase.createTask(task);
            res.status(201).json(createdTask);
        };
    }
}
//# sourceMappingURL=CreateNewTaskController.js.map