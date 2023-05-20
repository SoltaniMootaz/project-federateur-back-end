export class GetAllProjectsController {
    constructor(getAllProjectsUseCase) {
        this.getAllProjectsUseCase = getAllProjectsUseCase;
        this.findAll = async (req, res) => {
            const Projects = await this.getAllProjectsUseCase.findAll();
            res.json(Projects);
        };
    }
}
//# sourceMappingURL=GetAllProjectsController.js.map