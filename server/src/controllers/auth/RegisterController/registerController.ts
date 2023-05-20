import { Request, Response } from "express";
import { RegisterUseCase } from "../../../use-cases/auth/registerUseCase.js";
import User from "../../../entities/user.js";
import { isEmpty, isMaxLength } from "../../../Validations/validators.js";

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  // Validate request body using validation functions
  register = async (req: Request, res: Response): Promise<void> => {
    const user = req.body as User;

    if (
      isEmpty(user.email) ||
      isEmpty(user.password) ||
      isEmpty(user.fullName) ||
      isEmpty(user.phoneNumber) ||
      isEmpty(user.role)
    ) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    if (
      isMaxLength(user.email, 20) ||
      isMaxLength(user.fullName, 20) ||
      isMaxLength(user.password, 20) ||
      isMaxLength(user.phoneNumber, 20)
    ) {
      res.status(400).json({ error: "Fields exceed maximum length" });
      return;
    }

    const registeredUser = await this.registerUseCase.register(user);
    res.json(registeredUser);
  };
}
