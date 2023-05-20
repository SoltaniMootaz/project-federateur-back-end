import User from "../entities/user.js";
import dbConnection from "../db-connection/db.js";
import bcrypt from "bcrypt";

export class AuthRepository {
  async createUser(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const query =
      "INSERT INTO users (userId, email, password, fullName, phoneNumber, companyId) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      user.userId,
      user.email,
      hashedPassword,
      user.fullName,
      user.phoneNumber,
      user.companyId,
    ];

    return new Promise((resolve, reject) => {
      dbConnection.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      });
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const query = "SELECT * FROM users WHERE email = ?";
    const values = [email];

    return new Promise((resolve, reject) => {
      dbConnection.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          if (results.length > 0) {
            const user = results[0] as User;
            resolve(user);
          } else {
            resolve(null);
          }
        }
      });
    });
  }
}
