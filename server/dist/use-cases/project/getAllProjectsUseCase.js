export class GetAllProjectsUseCase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async findAll() {
        const Projects = await this.projectRepository.getAllProjects();
        return Projects;
    }
}
//# sourceMappingURL=getAllProjectsUseCase.js.map