import dbConnection from "../db-connection/db.js";
import { Company } from "../entities/company.js";
export class CompanyRepository {
  async getCompanyByUserId(userId: string): Promise<Company> {
    return new Promise<Company>((resolve, reject) => {
      const infoQuery = `
              SELECT *
              FROM company c
              JOIN users u
              ON u.companyId = c.companyId
              WHERE userId = ?
            `;

      dbConnection.query(infoQuery, [userId], (error, infoResults) => {
        if (error) {
          reject(error);
        } else if (infoResults.length === 0) {
          reject(new Error("Company not found"));
        } else {
          const companyInfo = infoResults[0];
          resolve(companyInfo);
        }
      });
    });
  }
  async getAllCompanies(): Promise<Company[]> {
    return new Promise<Company[]>((resolve, reject) => {
      const infoQuery = `
              SELECT *
              FROM company 
            `;

      dbConnection.query(infoQuery, (error, infoResults) => {
        if (error) {
          reject(error);
        } else if (infoResults.length === 0) {
          reject(new Error("Companies not found"));
        } else {
          const companies = infoResults[0];
          resolve(companies);
        }
      });
    });
  }
}
