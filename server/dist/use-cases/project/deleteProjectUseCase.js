export class DeleteProjectUseCase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async delete(projectId) {
        return await this.projectRepository.deleteProject(projectId);
    }
}
//# sourceMappingURL=deleteProjectUseCase.js.map