interface IUser {
  userId: number;
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  companyId: number;
  role?: string;
}

export default IUser;
