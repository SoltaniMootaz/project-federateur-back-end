import { Company } from "../../entities/company.js";
import { CompanyRepository } from "../../repositories/companyRepository.js";

export class GetAllCompaniesUseCase {
  private companyRepository: CompanyRepository;

  constructor(companyRepository: CompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async getAllCompanies(): Promise<Company[]> {
    try {
      const companies = await this.companyRepository.getAllCompanies();
      return companies;
    } catch (error) {
      throw error;
    }
  }
}
