import { GetProfileUseCase } from "../../../use-cases/user/GetUserProfileUseCase.js";
import { GetUserProfileController } from "./getUserProfileController.js";
import { UserRepository } from "../../../repositories/userRepository.js";
const userRepository = new UserRepository();
const getProfileUseCase = new GetProfileUseCase(userRepository);
const getProfileController = new GetUserProfileController(getProfileUseCase);
export default getProfileController;
//# sourceMappingURL=index.js.map