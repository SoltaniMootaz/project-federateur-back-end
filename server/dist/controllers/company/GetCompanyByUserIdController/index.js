import { GetCompanyByUserIdController } from "./GetCompanyByUserIdController.js";
import { GetCompanyByUserIdUseCase } from "../../../use-cases/company/getCompanyByUserIdUseCase.js";
import { CompanyRepository } from "../../../repositories/companyRepository.js";
const companyRepository = new CompanyRepository();
const getCompanyByUserIdUseCase = new GetCompanyByUserIdUseCase(companyRepository);
const getCompanyByUserIdController = new GetCompanyByUserIdController(getCompanyByUserIdUseCase);
export default getCompanyByUserIdController;
//# sourceMappingURL=index.js.map