import { Request, Response } from "express";
import { isEmpty, isMaxLength } from "../../../Validations/validators.js";
import { Project } from "../../../entities/project.js";
import { CreateProjectUseCase } from "../../../use-cases/project/createProjectUseCase.js";

export class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  // Validate request body using validation functions
  create = async (req: Request, res: Response): Promise<void> => {
    const project = req.body as Project;

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
