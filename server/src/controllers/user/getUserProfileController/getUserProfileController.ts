import { Request, Response } from "express";
import { GetProfileUseCase } from "../../../use-cases/user/GetUserProfileUseCase.js";
import { isEmpty } from "../../../Validations/validators.js";

export class GetUserProfileController {
  constructor(private getProfileUseCase: GetProfileUseCase) {}

  getProfile = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    if (isEmpty(userId)) {
      res.status(400).json({ error: "User ID is required" });
      return;
    }

    try {
      const profile = await this.getProfileUseCase.getUserProfile(userId);
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
