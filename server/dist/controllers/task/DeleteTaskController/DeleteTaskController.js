export class DeleteTaskController {
    constructor(deleteTaskUseCase) {
        this.deleteTaskUseCase = deleteTaskUseCase;
        this.deleteTask = async (req, res) => {
            const taskId = req.params.id;
            // Validate taskId if needed
            await this.deleteTaskUseCase.deleteTask(taskId);
            res.status(200).json({ message: "Task deleted successfully" });
        };
    }
}
//# sourceMappingURL=DeleteTaskController.js.map