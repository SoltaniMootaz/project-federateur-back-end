import argon2 from "argon2";
export class LoginUseCase {
    constructor(userRepository) {
        this.authRepository = userRepository;
    }
    async login(email, password) {
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
//# sourceMappingURL=loginUseCase.js.map