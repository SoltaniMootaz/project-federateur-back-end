import express from "express";
import GetCompanyByUserIdController from "../controllers/company/GetCompanyByUserIdController/index.js";
import GetAllCampaniesController from "../controllers/company/GetAllCompaniesController/index.js";

const router = express.Router();
// Get user profile route
router.get("/comapnies/:userId", GetCompanyByUserIdController.getCompany);
router.get("/comapnies/", GetAllCampaniesController.getAllCompanies);
export default router;
