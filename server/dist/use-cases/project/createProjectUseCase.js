export class CreateProjectUseCase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async create(project) {
        const createdProject = await this.projectRepository.createProject(project);
        return createdProject;
    }
}
//# sourceMappingURL=createProjectUseCase.js.map