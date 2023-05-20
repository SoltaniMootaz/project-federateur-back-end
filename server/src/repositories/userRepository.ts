import { ProfileDto } from "../use-cases/user/ProfileDto.js";
import dbConnection from "../db-connection/db.js";
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
}
