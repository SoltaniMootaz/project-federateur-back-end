import { Request, Response } from "express";
import { GetProjectByIdUseCase } from "../../../use-cases/project/getProjectByIdUseCase.js";
import { GetTeamAssignedToProjectUseCase } from "../../../use-cases/project/getTeamAssignedToProjectUseCase.js";

export class GetTeamAssignedToProjectController {
  constructor(
    private getTeamAssignedToProjectUseCase: GetTeamAssignedToProjectUseCase
  ) {}
  findTeam = async (req: Request, res: Response): Promise<void> => {
    const { projectId } = req.params;
    const team = await this.getTeamAssignedToProjectUseCase.findTeam(projectId);
    res.json(team);
  };
}
