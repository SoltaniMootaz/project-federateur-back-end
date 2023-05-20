import bcrypt from "bcrypt";
export class LoginUseCase {
    constructor(userRepository) {
        this.authRepository = userRepository;
    }
    async login(email, password) {
        const user = await this.authRepository.getUserByEmail(email);
        if (!user) {
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password.trim(), user.password);
        if (isPasswordValid) {
            return user;
        }
        return null;
    }
}
//# sourceMappingURL=loginUseCase.js.map