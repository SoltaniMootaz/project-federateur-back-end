export class GetCompanyByUserIdUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async getCompanyByUserId(userId) {
        try {
            const company = await this.companyRepository.getCompanyByUserId(userId);
            return company;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=getCompanyByUserIdUseCase.js.map