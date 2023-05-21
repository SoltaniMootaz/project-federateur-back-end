import { Request, Response } from "express";
import { GetAllTasksUseCase } from "../../../use-cases/task/GetAllTasksUseCase.js";
import Task from "../../../entities/task.js";

export class GetAllTasksController {
  constructor(private getAllTasksUseCase: GetAllTasksUseCase) {}

  getAllTasks = async (req: Request, res: Response): Promise<void> => {
    const tasks: Task[] = await this.getAllTasksUseCase.getAllTasks();

    res.status(200).json(tasks);
  };
}
