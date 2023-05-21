import { Request, Response } from "express";
import { UpdateTaskUseCase } from "../../../use-cases/task/UpdateTaskUseCase.js";
import Task from "../../../entities/task.js";

export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  updateTask = async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;
    const task = req.body as Task;
    task.taskId = taskId;

    await this.updateTaskUseCase.updateTask(task);

    res.status(200).json({ message: "Task updated successfully" });
  };
}
