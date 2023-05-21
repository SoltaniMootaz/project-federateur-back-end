import dbConnection from "../db-connection/db.js";
import { Project } from "../entities/project.js";
import user from "../entities/user.js";
export class ProjectRepository {
  async getProjectById(projectId: number): Promise<Project> {
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
  async getTeamByProjectId(projectId: number): Promise<user[]> {
    console.log(projectId);
    return new Promise<user[]>((resolve, reject) => {
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
        } else {
          console.log(teamResults);
          const users = teamResults.map(
            (row) =>
              new user(
                row.userId,
                row.email,
                row.password,
                row.fullName,
                row.phoneNumber,
                row.companyId,
                row.role
              )
          );
          resolve(users);
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
          const projects = infoResults;
          resolve(projects);
        }
      });
    });
  }
  async updateProject(project: Project): Promise<Project> {
    return new Promise<Project>((resolve, reject) => {
      const updateQuery = `
            UPDATE projects
            SET name = ?, status = ?
            WHERE projectId = ?
            `;
      const values = [project.name, project.status, project.projectId];
      dbConnection.query(updateQuery, values, (error, infoResults) => {
        if (error) {
          reject(error);
        } else if (infoResults.length === 0) {
          reject(new Error("Project not found"));
        } else {
          const projects = infoResults[0];
          resolve(projects);
        }
      });
    });
  }

  async deleteProject(projectId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const updateQuery = `
        DELETE FROM projects
        WHERE projectId = ?
            `;
      const values = [projectId];
      const ok: any = { status: "ok", code: "200" };
      dbConnection.query(updateQuery, values, (error, infoResults) => {
        if (error) {
          reject(error);
        } else if (infoResults.length === 0) {
          reject(new Error("Project not found"));
        } else {
          resolve(ok);
        }
      });
    });
  }
  async createProject(project: Project): Promise<Project> {
    return new Promise<Project>((resolve, reject) => {
      const createQuery = `
        INSERT INTO projects (name, status)
        VALUES (?, ?)
      `;
      const values = [project.name, project.status];

      dbConnection.query(createQuery, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          const projectId = results.insertId;
          const createdProject = new Project(
            projectId,
            project.name,
            project.status
          );
          resolve(createdProject);
        }
      });
    });
  }
}
