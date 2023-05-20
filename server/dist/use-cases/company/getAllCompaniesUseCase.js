export class GetAllCompaniesUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async getAllCompanies() {
        try {
            const companies = await this.companyRepository.getAllCompanies();
            return companies;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=getAllCompaniesUseCase.js.map