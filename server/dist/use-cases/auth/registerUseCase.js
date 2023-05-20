import bcrypt from "bcrypt";
export class RegisterUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async register(user) {
        const hashedPassword = await bcrypt.hash(user.password.toString().trim(), 12);
        await bcrypt.compare(user.password, hashedPassword, (error, result) => {
            if (error) {
                console.log("Error comparing passwords:", error);
                return;
            }
            if (result) {
                console.log("Passwords match");
            }
            else {
                console.log("Passwords do not match");
            }
        });
        user.password = hashedPassword;
        const registeredUser = await this.userRepository.createUser(user);
        return registeredUser;
    }
}
//# sourceMappingURL=registerUseCase.js.map