import User from "../../entities/user.js";
import { AuthRepository } from "../../repositories/authRepository.js";
import bcrypt from "bcrypt";

export class LoginUseCase {
  private authRepository: AuthRepository;

  constructor(userRepository: AuthRepository) {
    this.authRepository = userRepository;
  }

  async login(email: string, password: string): Promise<User | null> {
    const user = await this.authRepository.getUserByEmail(email);

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(
      password.trim(),
      user.password
    );

    if (isPasswordValid) {
      return user;
    }

    return null;
  }
}
