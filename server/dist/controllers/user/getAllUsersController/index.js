import { UserRepository } from "../../../repositories/userRepository.js";
import { GetAllUsersUseCase } from "../../../use-cases/user/GetAllUsersUseCase.js";
import { GetAllUsersController } from "./GetAllUsersController.js";
const userRepository = new UserRepository();
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);
export default getAllUsersController;
//# sourceMappingURL=index.js.map