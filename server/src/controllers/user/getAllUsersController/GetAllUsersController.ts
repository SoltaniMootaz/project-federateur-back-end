import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../../use-cases/user/GetAllUsersUseCase.js";
import user from "../../../entities/user.js";

export class GetAllUsersController {
  constructor(private getAllUsersCase: GetAllUsersUseCase) {}

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    const users: user[] = await this.getAllUsersCase.getAllUsers();

    res.status(200).json(users);
  };
}
