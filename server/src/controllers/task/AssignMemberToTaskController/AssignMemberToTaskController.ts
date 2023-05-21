import { Request, Response } from "express";
import { AssignMemberToTaskUseCase } from "../../../use-cases/task/AssignMemberToTaskUseCase.js";

export class AssignMemberToTaskController {
  constructor(private assignMemberToTaskUseCase: AssignMemberToTaskUseCase) {}

  assignMemberToTask = async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;
    const { userId } = req.body;

    // Validate parameters if needed

    await this.assignMemberToTaskUseCase.assignMemberToTask(taskId, userId);

    res.status(200).json({ message: "Member assigned to task successfully" });
  };
}
