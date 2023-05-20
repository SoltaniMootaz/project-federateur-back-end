import { Company } from "../../entities/company.js";
import { CompanyRepository } from "../../repositories/companyRepository.js";

export class GetCompanyByUserIdUseCase {
  private companyRepository: CompanyRepository;

  constructor(companyRepository: CompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async getCompanyByUserId(userId: string): Promise<Company> {
    try {
      const company = await this.companyRepository.getCompanyByUserId(userId);
      return company;
    } catch (error) {
      throw error;
    }
  }
}
