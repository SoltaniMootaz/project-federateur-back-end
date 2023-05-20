import User from "../../entities/user.js";
import { AuthRepository } from "../../repositories/authRepository.js";
import bcrypt from "bcrypt";

export class RegisterUseCase {
  constructor(private userRepository: AuthRepository) {}

  async register(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    const registeredUser = await this.userRepository.createUser(user);
    return registeredUser;
  }
}
