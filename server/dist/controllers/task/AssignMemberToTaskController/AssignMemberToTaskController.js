export class AssignMemberToTaskController {
    constructor(assignMemberToTaskUseCase) {
        this.assignMemberToTaskUseCase = assignMemberToTaskUseCase;
        this.assignMemberToTask = async (req, res) => {
            const { taskId, userId } = req.body;
            // Validate parameters if needed
            await this.assignMemberToTaskUseCase.assignMemberToTask(taskId, userId);
            res.status(200).json({ message: "Member assigned to task successfully" });
        };
    }
}
//# sourceMappingURL=AssignMemberToTaskController.js.map