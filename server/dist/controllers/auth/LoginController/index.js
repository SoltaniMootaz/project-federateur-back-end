import { LoginUseCase } from "../../../use-cases/auth/loginUseCase.js";
import { LoginController } from "./loginController.js";
import { AuthRepository } from "../../../repositories/authRepository.js";
const authRepository = new AuthRepository();
const loginUseCase = new LoginUseCase(authRepository);
const loginController = new LoginController(loginUseCase);
export default loginController;
//# sourceMappingURL=index.js.map