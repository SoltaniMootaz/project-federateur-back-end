import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../../../use-cases/task/DeleteTaskUseCase.js";

export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  deleteTask = async (req: Request, res: Response): Promise<void> => {
    const taskId = req.params.id;

    // Validate taskId if needed

    await this.deleteTaskUseCase.deleteTask(taskId);

    res.status(200).json({ message: "Task deleted successfully" });
  };
}
