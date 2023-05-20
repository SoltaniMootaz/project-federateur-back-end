import { UserRepository } from "../../repositories/userRepository.js";
import { ProfileDto } from "./ProfileDto.js";

export class GetProfileUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUserProfile(userId: string): Promise<ProfileDto> {
    try {
      const profile = await this.userRepository.getUserProfile(userId);
      return profile;
    } catch (error) {
      throw error;
    }
  }
}
