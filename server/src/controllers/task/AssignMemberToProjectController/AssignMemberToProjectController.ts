import { Request, Response } from "express";
import { AssignMemberToProjectUseCase } from "../../../use-cases/task/AssignMemberToProjectUseCase.js";

export class AssignMemberToProjectController {
  constructor(
    private assignMemberToProjectUseCase: AssignMemberToProjectUseCase
  ) {}

  assignMemberToProject = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { projectId, userId } = req.body;

    await this.assignMemberToProjectUseCase.assignMember(projectId, userId);

    res
      .status(200)
      .json({ message: "Member assigned to project successfully" });
  };
}
