import { isEmpty } from "../../../Validations/validators.js";
export class LoginController {
    constructor(loginUseCase) {
        this.loginUseCase = loginUseCase;
        this.login = async (req, res) => {
            // Validate request body using validation functions
            console.log(this.loginUseCase);
            const { email, password } = req.body;
            if (isEmpty(email) || isEmpty(password)) {
                res.status(400).json({ error: "Email and password are required" });
                return;
            }
            const user = await this.loginUseCase.login(email, password);
            if (user) {
                res.json(user);
            }
            else {
                res.status(401).json({ error: "Invalid credentials" });
            }
        };
    }
}
//# sourceMappingURL=loginController.js.map