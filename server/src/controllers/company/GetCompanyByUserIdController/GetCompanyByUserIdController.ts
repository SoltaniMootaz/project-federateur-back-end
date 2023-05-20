import { Request, Response } from "express";
import { GetCompanyByUserIdUseCase } from "../../../use-cases/company/getCompanyByUserIdUseCase.js";
import { isEmpty } from "../../../Validations/validators.js";

export class GetCompanyByUserIdController {
  constructor(private getCompanyByuserIdUseCase: GetCompanyByUserIdUseCase) {}

  getCompany = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    if (isEmpty(userId)) {
      res.status(400).json({ error: "User ID is required" });
      return;
    }

    try {
      const company = await this.getCompanyByuserIdUseCase.getCompanyByUserId(
        userId
      );
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
