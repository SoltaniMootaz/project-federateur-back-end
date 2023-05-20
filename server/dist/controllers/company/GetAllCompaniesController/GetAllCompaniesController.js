export class GetAllCampaniesController {
    constructor(getCompanyAllCompanies) {
        this.getCompanyAllCompanies = getCompanyAllCompanies;
        this.getAllCompanies = async (req, res) => {
            try {
                const company = await this.getCompanyAllCompanies.getAllCompanies();
                res.json(company);
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        };
    }
}
//# sourceMappingURL=GetAllCompaniesController.js.map