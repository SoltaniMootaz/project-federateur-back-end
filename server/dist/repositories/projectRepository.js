import dbConnection from "../db-connection/db.js";
import { Project } from "../entities/project.js";
import user from "../entities/user.js";
export class ProjectRepository {
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
    async getTeamByProjectId(projectId) {
        return new Promise((resolve, reject) => {
            const teamQuery = `
        SELECT u.*, 
               CASE
                 WHEN pm.userId IS NOT NULL THEN 'project manager'
                 ELSE tm.role
               END AS role
        FROM users u
        LEFT JOIN projectManagers pm ON u.userId = pm.userId AND pm.projectId = ?
        LEFT JOIN teamMembers tm ON u.userId = tm.userId AND tm.projectId = ?
        WHERE tm.userId IS NOT NULL OR pm.userId IS NOT NULL
      `;
            dbConnection.query(teamQuery, [projectId, projectId], (error, teamResults) => {
                if (error) {
                    reject(error);
                }
                else {
                    const users = teamResults.map((row) => new user(row.userId, row.email, row.password, row.fullName, row.phoneNumber, row.companyId, row.role));
                    resolve(users);
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
            UPDATE projects
            SET name = ?, status = ?
            WHERE projectId = ?
            `;
            const values = [project.name, project.status, project.projectId];
            dbConnection.query(updateQuery, values, (error, infoResults) => {
                if (error) {
                    reject(error);
                }
                else if (infoResults.length === 0) {
                    reject(new Error("Project not found"));
                }
                else {
                    const projects = infoResults[0];
                    resolve(projects);
                }
            });
        });
    }
    async deleteProject(projectId) {
        return new Promise((resolve, reject) => {
            const updateQuery = `
        DELETE FROM projects
        WHERE projectId = ?
            `;
            const values = [projectId];
            const ok = { status: "ok", code: "200" };
            dbConnection.query(updateQuery, values, (error, infoResults) => {
                if (error) {
                    reject(error);
                }
                else if (infoResults.length === 0) {
                    reject(new Error("Project not found"));
                }
                else {
                    resolve(ok);
                }
            });
        });
    }
    async createProject(project) {
        return new Promise((resolve, reject) => {
            const createQuery = `
        INSERT INTO projects (name, status)
        VALUES (?, ?)
      `;
            const values = [project.name, project.status];
            dbConnection.query(createQuery, values, (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    const projectId = results.insertId;
                    const createdProject = new Project(projectId, project.name, project.status);
                    resolve(createdProject);
                }
            });
        });
    }
}
//# sourceMappingURL=projectRepository.js.map