import { Request, Response } from "express";
import { DeleteProjectUseCase } from "../../../use-cases/project/deleteProjectUseCase.js";

export class DeleteProjectController {
  constructor(private deleteProjectUseCase: DeleteProjectUseCase) {}
  delete = async (req: Request, res: Response): Promise<void> => {
    const { projectId } = req.params;
    const deletedProject = await this.deleteProjectUseCase.delete(projectId);
    res.json(deletedProject);
  };
}
