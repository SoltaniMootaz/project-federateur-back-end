import user from "../../entities/user.js";
import { UserRepository } from "../../repositories/userRepository.js";

export class GetAllUsersUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers(): Promise<user[]> {
    try {
      const users = await this.userRepository.getAllUsers();
      return users;
    } catch (error) {
      throw error;
    }
  }
}
