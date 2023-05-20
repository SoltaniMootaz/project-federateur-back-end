import { ProjectRepository } from "../../../repositories/projectRepository.js";
import { GetAllProjectsUseCase } from "../../../use-cases/project/getAllProjectsUseCase.js";
import { GetAllProjectsController } from "./GetAllProjectsController.js";
const projectRepository = new ProjectRepository();
const getAllProjectsUseCase = new GetAllProjectsUseCase(projectRepository);
const getAllProjectsController = new GetAllProjectsController(getAllProjectsUseCase);
export default getAllProjectsController;
//# sourceMappingURL=index.js.map