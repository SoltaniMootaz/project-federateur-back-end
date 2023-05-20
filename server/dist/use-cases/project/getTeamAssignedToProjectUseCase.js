export class GetTeamAssignedToProjectUseCase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async findTeam(projectId) {
        const Project = await this.projectRepository.getTeamByProjectId(projectId);
        return Project;
    }
}
//# sourceMappingURL=getTeamAssignedToProjectUseCase.js.map