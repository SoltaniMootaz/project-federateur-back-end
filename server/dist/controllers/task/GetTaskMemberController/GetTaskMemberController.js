export class GetTaskMemberController {
    constructor(getTaskMemberUseCase) {
        this.getTaskMemberUseCase = getTaskMemberUseCase;
        this.getTaskMember = async (req, res) => {
            const taskId = req.params.id;
            // Validate taskId if needed
            const taskMember = await this.getTaskMemberUseCase.getTaskMember(taskId);
            if (taskMember) {
                res.status(200).json(taskMember);
            }
            else {
                res.status(404).json({ error: "Task member not found" });
            }
        };
    }
}
//# sourceMappingURL=GetTaskMemberController.js.map