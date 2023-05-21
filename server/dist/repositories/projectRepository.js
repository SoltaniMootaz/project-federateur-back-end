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
        FROM projectteam pt
        JOIN users u ON pt.userId = u.userId
        LEFT JOIN projectManagers pm ON u.userId = pm.userId 
        LEFT JOIN teamMembers tm ON u.userId = tm.userId 
        WHERE pt.projectId = ?
      `;
            dbConnection.query(teamQuery, [projectId], (error, teamResults) => {
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
            SELECT p.*, COUNT(pt.projectId) AS teamMembers
            FROM projects p
            LEFT JOIN projectteam pt ON p.projectId = pt.projectId
            GROUP BY p.projectId;      
            `;
            dbConnection.query(infoQuery, (error, infoResults) => {
                if (error) {
                    reject(error);
                }
                else if (infoResults.length === 0) {
                    reject(new Error("Projects not found"));
                }
                else {
                    const projects = infoResults;
                    resolve(projects);
                }
            });
        });
    }
    async updateProject(project) {
        return new Promise((resolve, reject) => {
            const updateClauses = [];
            if (project.name !== undefined) {
                updateClauses.push("name = ?");
            }
            if (project.status !== undefined) {
                updateClauses.push("status = ?");
            }
            const updateQuery = `
        UPDATE projects
        SET
          ${updateClauses.join(",\n    ")}
        WHERE projectId = ?;
      `;
            const values = [
                ...(project.name !== undefined ? [project.name] : []),
                ...(project.status !== undefined ? [project.status] : []),
                project.projectId,
            ];
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