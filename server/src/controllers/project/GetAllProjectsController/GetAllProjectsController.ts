import { Request, Response } from "express";
import { GetAllProjectsUseCase } from "../../../use-cases/project/getAllProjectsUseCase.js";

export class GetAllProjectsController {
  constructor(private getAllProjectsUseCase: GetAllProjectsUseCase) {}

  findAll = async (req: Request, res: Response): Promise<void> => {
    const Projects = await this.getAllProjectsUseCase.findAll();
    res.json(Projects);
  };
}
