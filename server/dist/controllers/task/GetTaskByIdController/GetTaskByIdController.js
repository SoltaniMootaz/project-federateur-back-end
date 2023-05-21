export class GetTaskByIdController {
    constructor(getTaskByIdUseCase) {
        this.getTaskByIdUseCase = getTaskByIdUseCase;
        this.getTaskById = async (req, res) => {
            const { taskId } = req.params;
            // Validate taskId if needed
            const task = await this.getTaskByIdUseCase.getTaskById(taskId);
            if (task) {
                res.status(200).json(task);
            }
            else {
                res.status(404).json({ error: "Task not found" });
            }
        };
    }
}
//# sourceMappingURL=GetTaskByIdController.js.map