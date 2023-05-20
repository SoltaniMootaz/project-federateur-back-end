export class GetProjectByIdUseCase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async findById(projectId) {
        const Project = await this.projectRepository.getProjectById(projectId);
        return Project;
    }
}
//# sourceMappingURL=getProjectByIdUseCase.js.map