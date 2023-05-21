import { Request, Response } from "express";
import { isEmpty, isMaxLength } from "../../../Validations/validators.js";
import { Project } from "../../../entities/project.js";
import { UpdateProjectUseCase } from "../../../use-cases/project/updateProjectUseCase.js";

export class UpdateProjectController {
  constructor(private updateProjectUseCase: UpdateProjectUseCase) {}

  // Validate request body using validation functions
  update = async (req: Request, res: Response): Promise<void> => {
    const { projectId } = req.params;
    const project = req.body;
    project.projectId = projectId;

    if (isEmpty(project.name) || isEmpty(project.status)) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    if (isMaxLength(project.name, 20)) {
      res.status(400).json({ error: "Fields exceed maximum length" });
      return;
    }

    const createdProject = await this.updateProjectUseCase.update(project);
    res.json(createdProject);
  };
}
