import { IProject } from "../interfaces/IProject.js";

export class Project implements IProject {
  constructor(
    public projectId: number,
    public name: string,
    public status: string,
    public teamMembers?: number
  ) {}
}
