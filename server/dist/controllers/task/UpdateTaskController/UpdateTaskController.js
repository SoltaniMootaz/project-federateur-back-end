export class UpdateTaskController {
    constructor(updateTaskUseCase) {
        this.updateTaskUseCase = updateTaskUseCase;
        this.updateTask = async (req, res) => {
            const task = req.body;
            // Validate task properties if needed
            await this.updateTaskUseCase.updateTask(task);
            res.status(200).json({ message: "Task updated successfully" });
        };
    }
}
//# sourceMappingURL=UpdateTaskController.js.map