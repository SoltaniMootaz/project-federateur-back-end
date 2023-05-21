import IUser from "../interfaces/IUser.js";

class user implements IUser {
  constructor(
    public userId: number,
    public email: string,
    public password: string,
    public fullName: string,
    public phoneNumber: string,
    public companyId: number,
    public role?: string,
    public assignedProjects?: number
  ) {}
}
export default user;
