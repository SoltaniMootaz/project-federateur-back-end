import dbConnection from "../db-connection/db.js";
import { Project } from "../entities/project.js";
export class CompanyRepository {
  async getProjectById(projectId: string): Promise<Project> {
    return new Promise<Project>((resolve, reject) => {
      const infoQuery = `
              SELECT *
              FROM projects 
              WHERE projectId = ?
            `;

      dbConnection.query(infoQuery, [projectId], (error, infoResults) => {
        if (error) {
          reject(error);
        } else if (infoResults.length === 0) {
          reject(new Error("Project not found"));
        } else {
          const projectInfo = infoResults[0];
          resolve(projectInfo);
        }
      });
    });
  }
  async getAllProjects(): Promise<Project[]> {
    return new Promise<Project[]>((resolve, reject) => {
      const infoQuery = `
              SELECT *
              FROM projects 
            `;

      dbConnection.query(infoQuery, (error, infoResults) => {
        if (error) {
          reject(error);
        } else if (infoResults.length === 0) {
          reject(new Error("Projects not found"));
        } else {
          const projects = infoResults[0];
          resolve(projects);
        }
      });
    });
  }
  async updateProject(project: Project): Promise<Project> {
    return new Promise<Project>((resolve, reject) => {
      const updateQuery = `
              SELECT *
              FROM projects 
            `;

      dbConnection.query(updateQuery, (error, infoResults) => {
        if (error) {
          reject(error);
        } else if (infoResults.length === 0) {
          reject(new Error("Projects not found"));
        } else {
          const projects = infoResults[0];
          resolve(projects);
        }
      });
    });
  }
}
