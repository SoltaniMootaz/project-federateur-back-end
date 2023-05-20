import express from "express";
import GetCompanyByUserIdController from "../controllers/company/GetCompanyByUserIdController/index.js";
import GetAllCampaniesController from "../controllers/company/GetAllCompaniesController/index.js";
const router = express.Router();
// Get user profile route
router.get("/companies/:userId", GetCompanyByUserIdController.getCompany);
router.get("/companies/", GetAllCampaniesController.getAllCompanies);
export default router;
//# sourceMappingURL=companyRoutes.js.map