import dbConnection from "../db-connection/db.js";
export class CompanyRepository {
    async getProjectById(projectId) {
        return new Promise((resolve, reject) => {
            const infoQuery = `
              SELECT *
              FROM projects 
              WHERE projectId = ?
            `;
            dbConnection.query(infoQuery, [projectId], (error, infoResults) => {
                if (error) {
                    reject(error);
                }
                else if (infoResults.length === 0) {
                    reject(new Error("Project not found"));
                }
                else {
                    const projectInfo = infoResults[0];
                    resolve(projectInfo);
                }
            });
        });
    }
    async getAllProjects() {
        return new Promise((resolve, reject) => {
            const infoQuery = `
              SELECT *
              FROM projects 
            `;
            dbConnection.query(infoQuery, (error, infoResults) => {
                if (error) {
                    reject(error);
                }
                else if (infoResults.length === 0) {
                    reject(new Error("Projects not found"));
                }
                else {
                    const projects = infoResults[0];
                    resolve(projects);
                }
            });
        });
    }
    async updateProject(project) {
        return new Promise((resolve, reject) => {
            const updateQuery = `
              SELECT *
              FROM projects 
            `;
            dbConnection.query(updateQuery, (error, infoResults) => {
                if (error) {
                    reject(error);
                }
                else if (infoResults.length === 0) {
                    reject(new Error("Projects not found"));
                }
                else {
                    const projects = infoResults[0];
                    resolve(projects);
                }
            });
        });
    }
}
//# sourceMappingURL=projectRepository.js.map