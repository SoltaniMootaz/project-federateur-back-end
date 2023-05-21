export class UpdateTaskController {
    constructor(updateTaskUseCase) {
        this.updateTaskUseCase = updateTaskUseCase;
        this.updateTask = async (req, res) => {
            const { taskId } = req.params;
            const task = req.body;
            task.taskId = taskId;
            await this.updateTaskUseCase.updateTask(task);
            res.status(200).json({ message: "Task updated successfully" });
        };
    }
}
//# sourceMappingURL=UpdateTaskController.js.map