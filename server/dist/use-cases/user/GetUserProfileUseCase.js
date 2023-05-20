export class GetProfileUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUserProfile(userId) {
        try {
            const profile = await this.userRepository.getUserProfile(userId);
            return profile;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=GetUserProfileUseCase.js.map