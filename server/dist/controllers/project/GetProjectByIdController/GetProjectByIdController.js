export class GetProjectByIdController {
    constructor(getProjectByIdUseCase) {
        this.getProjectByIdUseCase = getProjectByIdUseCase;
        this.findById = async (req, res) => {
            const { projectId } = req.params;
            const Project = await this.getProjectByIdUseCase.findById(projectId);
            res.json(Project);
        };
    }
}
//# sourceMappingURL=GetProjectByIdController.js.map