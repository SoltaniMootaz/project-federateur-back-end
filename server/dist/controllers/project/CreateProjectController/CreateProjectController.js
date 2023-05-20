import { isEmpty, isMaxLength } from "../../../Validations/validators.js";
export class CreateProjectController {
    constructor(createProjectUseCase) {
        this.createProjectUseCase = createProjectUseCase;
        // Validate request body using validation functions
        this.create = async (req, res) => {
            const project = req.body;
            if (isEmpty(project.name) || isEmpty(project.status)) {
                res.status(400).json({ error: "All fields are required" });
                return;
            }
            if (isMaxLength(project.name, 20)) {
                res.status(400).json({ error: "Fields exceed maximum length" });
                return;
            }
            const createdProject = await this.createProjectUseCase.create(project);
            res.json(createdProject);
        };
    }
}
//# sourceMappingURL=CreateProjectController.js.map