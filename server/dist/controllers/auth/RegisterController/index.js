import { RegisterUseCase } from "../../../use-cases/auth/registerUseCase.js";
import { RegisterController } from "./registerController.js";
import { AuthRepository } from "../../../repositories/authRepository.js";
const authRepository = new AuthRepository();
const registerUseCase = new RegisterUseCase(authRepository);
const registerController = new RegisterController(registerUseCase);
export default registerController;
//# sourceMappingURL=index.js.map