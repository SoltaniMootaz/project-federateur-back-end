import User from "../../entities/user.js";
import { AuthRepository } from "../../repositories/authRepository.js";
import bcrypt from "bcrypt";

export class LoginUseCase {
  public authRepository: AuthRepository;
  constructor(userRepository: AuthRepository) {
    this.authRepository = userRepository;
  }

  async login(email: string, password: string): Promise<User | null> {
    console.log("here");
    const user = await this.authRepository.getUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }
}
