export class GetAllUsersUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        try {
            const users = await this.userRepository.getAllUsers();
            return users;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=GetAllUsersUseCase.js.map