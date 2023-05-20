export class GetTeamAssignedToProjectController {
    constructor(getTeamAssignedToProjectUseCase) {
        this.getTeamAssignedToProjectUseCase = getTeamAssignedToProjectUseCase;
        this.findTeam = async (req, res) => {
            const { projectId } = req.params;
            const team = await this.getTeamAssignedToProjectUseCase.findTeam(projectId);
            res.json(team);
        };
    }
}
//# sourceMappingURL=GetTeamAssignedToProjectController.js.map