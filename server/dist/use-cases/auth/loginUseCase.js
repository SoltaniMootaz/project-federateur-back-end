import bcrypt from "bcrypt";
export class LoginUseCase {
    constructor(userRepository) {
        this.authRepository = userRepository;
    }
    async login(email, password) {
        console.log("here");
        const user = await this.authRepository.getUserByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        }
        return null;
    }
}
//# sourceMappingURL=loginUseCase.js.map