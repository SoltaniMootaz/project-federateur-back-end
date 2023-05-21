import { Request, Response } from "express";
import { UpdateTaskUseCase } from "../../../use-cases/task/UpdateTaskUseCase.js";
import Task from "../../../entities/task.js";

export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  updateTask = async (req: Request, res: Response): Promise<void> => {
    const task = req.body as Task;

    // Validate task properties if needed

    await this.updateTaskUseCase.updateTask(task);

    res.status(200).json({ message: "Task updated successfully" });
  };
}
