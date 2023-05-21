import User from "../../entities/user.js";
import { AuthRepository } from "../../repositories/authRepository.js";
import argon2 from "argon2";

export class RegisterUseCase {
  constructor(private userRepository: AuthRepository) {}

  async register(user: User): Promise<User> {
    const hashedPassword = await argon2.hash(user.password.toString().trim(), {
      type: argon2.argon2id,
      hashLength: 64, // Adjust the hash length as needed
    });

    user.password = hashedPassword;
    const registeredUser = await this.userRepository.createUser(user);
    return registeredUser;
  }
}
