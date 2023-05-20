export class ProfileDto {
    constructor(userId, email, password, fullName, phoneNumber, companyId, companyName, companyDomain, role, projects) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.companyId = companyId;
        this.companyName = companyName;
        this.role = role;
        this.companyDomain = companyDomain;
        this.projects = projects;
    }
}
//# sourceMappingURL=ProfileDto.js.map