import User from "../../entities/user.js";
import { AuthRepository } from "../../repositories/authRepository.js";
import bcrypt from "bcrypt";

export class RegisterUseCase {
  constructor(private userRepository: AuthRepository) {}

  async register(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(
      user.password.toString().trim(),
      12
    );
    await bcrypt.compare(user.password, hashedPassword, (error, result) => {
      if (error) {
        console.log("Error comparing passwords:", error);
        return;
      }

      if (result) {
        console.log("Passwords match");
      } else {
        console.log("Passwords do not match");
      }
    });
    user.password = hashedPassword;
    const registeredUser = await this.userRepository.createUser(user);
    return registeredUser;
  }
}
