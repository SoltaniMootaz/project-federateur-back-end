import { isEmpty, isMaxLength } from "../../../Validations/validators.js";
export class RegisterController {
    constructor(registerUseCase) {
        this.registerUseCase = registerUseCase;
        // Validate request body using validation functions
        this.register = async (req, res) => {
            const user = req.body;
            if (isEmpty(user.email) ||
                isEmpty(user.password) ||
                isEmpty(user.fullName) ||
                isEmpty(user.phoneNumber) ||
                isEmpty(user.role)) {
                res.status(400).json({ error: "All fields are required" });
                return;
            }
            if (isMaxLength(user.email, 20) ||
                isMaxLength(user.fullName, 20) ||
                isMaxLength(user.password, 20) ||
                isMaxLength(user.phoneNumber, 20)) {
                res.status(400).json({ error: "Fields exceed maximum length" });
                return;
            }
            const registeredUser = await this.registerUseCase.register(user);
            res.json(registeredUser);
        };
    }
}
//# sourceMappingURL=registerController.js.map