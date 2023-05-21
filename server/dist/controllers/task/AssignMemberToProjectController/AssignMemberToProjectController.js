export class AssignMemberToProjectController {
    constructor(assignMemberToProjectUseCase) {
        this.assignMemberToProjectUseCase = assignMemberToProjectUseCase;
        this.assignMemberToProject = async (req, res) => {
            const { projectId, userId } = req.body;
            await this.assignMemberToProjectUseCase.assignMember(projectId, userId);
            res
                .status(200)
                .json({ message: "Member assigned to project successfully" });
        };
    }
}
//# sourceMappingURL=AssignMemberToProjectController.js.map