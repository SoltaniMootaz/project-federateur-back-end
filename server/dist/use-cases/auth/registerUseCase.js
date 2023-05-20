import bcrypt from "bcrypt";
export class RegisterUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async register(user) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        const registeredUser = await this.userRepository.createUser(user);
        return registeredUser;
    }
}
//# sourceMappingURL=registerUseCase.js.map