import { isEmpty, isMaxLength } from "../../../Validations/validators.js";
export class UpdateProjectController {
    constructor(updateProjectUseCase) {
        this.updateProjectUseCase = updateProjectUseCase;
        // Validate request body using validation functions
        this.update = async (req, res) => {
            const { projectId } = req.params;
            const project = req.body;
            project.projectId = projectId;
            if (project.name) {
                if (isEmpty(project.name)) {
                    res.status(400).json({ error: "All fields are required" });
                    return;
                }
                if (isMaxLength(project.name, 20)) {
                    res.status(400).json({ error: "Fields exceed maximum length" });
                    return;
                }
            }
            if (project.status) {
                if (isEmpty(project.status)) {
                    res.status(400).json({ error: "All fields are required" });
                    return;
                }
            }
            const createdProject = await this.updateProjectUseCase.update(project);
            res.json(createdProject);
        };
    }
}
//# sourceMappingURL=UpdateProjectController.js.map