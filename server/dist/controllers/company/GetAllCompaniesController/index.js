import { CompanyRepository } from "../../../repositories/companyRepository.js";
import { GetAllCompaniesUseCase } from "../../../use-cases/company/getAllCompaniesUseCase.js";
import { GetAllCampaniesController } from "./GetAllCompaniesController.js";
const companyRepository = new CompanyRepository();
const getAllCompaniesUseCase = new GetAllCompaniesUseCase(companyRepository);
const getAllCompaniesController = new GetAllCampaniesController(getAllCompaniesUseCase);
export default getAllCompaniesController;
//# sourceMappingURL=index.js.map