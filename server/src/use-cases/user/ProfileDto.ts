import { Project } from "../../entities/project.js";

interface IProfileDto {
  userId: number;
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  companyId: number;
  companyName: string;
  projects: Project[];
}

export class ProfileDto implements IProfileDto {
  public userId: number;
  public email: string;
  public password: string;
  public fullName: string;
  public phoneNumber: string;
  public companyId: number;
  public companyName: string;
  public companyDomain: string;
  public projects: Project[];

  constructor(
    userId: number,
    email: string,
    password: string,
    fullName: string,
    phoneNumber: string,
    companyId: number,
    companyName: string,
    companyDomain: string,
    projects: Project[]
  ) {
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.companyId = companyId;
    this.companyName = companyName;
    this.companyDomain = companyDomain;
    this.projects = projects;
  }
}
