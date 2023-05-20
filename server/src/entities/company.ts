import { ICompany } from "../interfaces/ICompany.js";

export class Company implements ICompany {
  constructor(
    public companyId: number,
    public name: string,
    public domain: string
  ) {}
}
