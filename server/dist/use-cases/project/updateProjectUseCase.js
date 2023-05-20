export class UpdateProjectUseCase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async update(project) {
        const updatedProject = await this.projectRepository.updateProject(project);
        return updatedProject;
    }
}
//# sourceMappingURL=updateProjectUseCase.js.map