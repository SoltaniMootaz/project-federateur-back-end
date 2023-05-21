import { Request, Response } from "express";
import { GetTaskMemberUseCase } from "../../../use-cases/task/GetTaskMemberUseCase.js";
import user from "../../../entities/user.js";

export class GetTaskMemberController {
  constructor(private getTaskMemberUseCase: GetTaskMemberUseCase) {}

  getTaskMember = async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;

    // Validate taskId if needed

    const taskMember: user | null =
      await this.getTaskMemberUseCase.getTaskMember(taskId);

    if (taskMember) {
      res.status(200).json(taskMember);
    } else {
      res.status(404).json({ error: "Task member not found" });
    }
  };
}
