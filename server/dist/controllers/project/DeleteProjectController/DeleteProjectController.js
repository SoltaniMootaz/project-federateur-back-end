export class DeleteProjectController {
    constructor(deleteProjectUseCase) {
        this.deleteProjectUseCase = deleteProjectUseCase;
        this.delete = async (req, res) => {
            const { projectId } = req.params;
            const deletedProject = await this.deleteProjectUseCase.delete(projectId);
            res.json(deletedProject);
        };
    }
}
//# sourceMappingURL=DeleteProjectController.js.map