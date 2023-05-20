import { Request, Response } from "express";
import { GetCompanyByUserIdUseCase } from "../../../use-cases/company/getCompanyByUserIdUseCase.js";
import { isEmpty } from "../../../Validations/validators.js";
import { GetAllCompaniesUseCase } from "../../../use-cases/company/getAllCompaniesUseCase.js";

export class GetAllCampaniesController {
  constructor(private getCompanyAllCompanies: GetAllCompaniesUseCase) {}

  getAllCompanies = async (req: Request, res: Response): Promise<void> => {
    try {
      const company = await this.getCompanyAllCompanies.getAllCompanies();
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
