import { Request, Response } from "express";
import { GetProjectByIdUseCase } from "../../../use-cases/project/getProjectByIdUseCase.js";

export class GetProjectByIdController {
  constructor(private getProjectByIdUseCase: GetProjectByIdUseCase) {}
  findById = async (req: Request, res: Response): Promise<void> => {
    const { projectId } = req.params;
    const Project = await this.getProjectByIdUseCase.findById(projectId);
    res.json(Project);
  };
}
