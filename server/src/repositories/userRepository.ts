import { ProfileDto } from "../use-cases/user/ProfileDto.js";
import dbConnection from "../db-connection/db.js";
import user from "../entities/user.js";
export class UserRepository {
  async getUserProfile(userId: string): Promise<ProfileDto> {
    return new Promise<ProfileDto>((resolve, reject) => {
      const infoQuery = `
              SELECT *
              FROM users u
              JOIN company c
              ON u.companyId = c.companyId
              WHERE userId = ?
            `;
      const projectsQuery = `
              SELECT p.projectId, p.name, p.status
              FROM projectteam pt
              JOIN users u
              ON pt.userId = u.userId
              JOIN projects p
              ON pt.projectId = p.projectId
              WHERE u.userId = ?
            `;

      dbConnection.query(infoQuery, [userId], (error, infoResults) => {
        if (error) {
          reject(error);
        } else if (infoResults.length === 0) {
          reject(new Error("User not found"));
        } else {
          const userInfo = infoResults[0];

          dbConnection.query(
            projectsQuery,
            [userId],
            (error, projectsResults) => {
              if (error) {
                reject(error);
              } else {
                const projects = projectsResults.map((row) => ({
                  projectId: row.projectId,
                  name: row.name,
                  status: row.status,
                }));

                const profileDto: ProfileDto = {
                  userId: userInfo.userId,
                  email: userInfo.email,
                  password: userInfo.password,
                  fullName: userInfo.fullName,
                  phoneNumber: userInfo.phoneNumber,
                  companyId: userInfo.companyId,
                  companyName: userInfo.name,
                  companyDomain: userInfo.domain,
                  role: userInfo.role,
                  projects: projects,
                };

                resolve(profileDto);
              }
            }
          );
        }
      });
    });
  }

  async getAllUsers(): Promise<user[]> {
    return new Promise<user[]>((resolve, reject) => {
      const infoQuery = `
        SELECT u.*, 
            CASE
                WHEN pm.userId IS NOT NULL THEN 'project manager'
                ELSE tm.role
            END AS role
        FROM users u 
        LEFT JOIN projectManagers pm ON u.userId = pm.userId 
        LEFT JOIN teamMembers tm ON u.userId = tm.userId
      `;

      dbConnection.query(infoQuery, async (error, infoResults) => {
        if (error) {
          reject(error);
        } else {
          const users = infoResults.map((row: any) => {
            const u = new user(
              row.userId,
              row.email,
              row.password,
              row.fullName,
              row.phoneNumber,
              row.companyId,
              row.role
            );
            return u;
          });

          for (const u of users) {
            const countQuery = `
              SELECT COUNT(*) AS assignedProjects
              FROM projectteam
              WHERE userId = ?
            `;

            const countResults = await new Promise<number>(
              (countResolve, countReject) => {
                dbConnection.query(
                  countQuery,
                  [u.userId],
                  (countError, countRows) => {
                    if (countError) {
                      countReject(countError);
                    } else {
                      const assignedProjects = countRows[0].assignedProjects;
                      countResolve(assignedProjects);
                    }
                  }
                );
              }
            );

            u.assignedProjects = countResults;
          }

          resolve(users);
        }
      });
    });
  }
}
