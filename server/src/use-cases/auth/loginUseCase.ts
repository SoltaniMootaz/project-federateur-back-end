import User from "../../entities/user.js";
import { AuthRepository } from "../../repositories/authRepository.js";
import argon2 from "argon2";

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

    const isPasswordValid = await argon2.verify(user.password, password.trim());

    if (isPasswordValid) {
      return user;
    }

    return null;
  }
}
