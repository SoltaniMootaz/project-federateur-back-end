import { isEmpty } from "../../../Validations/validators.js";
export class GetCompanyByUserIdController {
    constructor(getCompanyByuserIdUseCase) {
        this.getCompanyByuserIdUseCase = getCompanyByuserIdUseCase;
        this.getCompany = async (req, res) => {
            const { userId } = req.params;
            if (isEmpty(userId)) {
                res.status(400).json({ error: "User ID is required" });
                return;
            }
            try {
                const company = await this.getCompanyByuserIdUseCase.getCompanyByUserId(userId);
                res.json(company);
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        };
    }
}
//# sourceMappingURL=GetCompanyByUserIdController.js.map