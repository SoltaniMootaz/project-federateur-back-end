import { Request, Response } from "express";
import { GetTaskByIdUseCase } from "../../../use-cases/task/GetTaskByIdUseCase.js";
import Task from "../../../entities/task.js";

export class GetTaskByIdController {
  constructor(private getTaskByIdUseCase: GetTaskByIdUseCase) {}

  getTaskById = async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;

    // Validate taskId if needed

    const task: Task | null = await this.getTaskByIdUseCase.getTaskById(taskId);

    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  };
}
