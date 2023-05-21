import { Request, Response } from "express";
import { CreateNewTaskUseCase } from "../../../use-cases/task/CreateNewTaskUseCase.js";
import Task from "../../../entities/task.js";

export class CreateNewTaskController {
  constructor(private createNewTaskUseCase: CreateNewTaskUseCase) {}

  createNewTask = async (req: Request, res: Response): Promise<void> => {
    const task = req.body as Task;

    // Validate task properties if needed

    const createdTask = await this.createNewTaskUseCase.createTask(task);

    res.status(201).json(createdTask);
  };
}
