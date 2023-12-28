export interface RegisterResponseModel {
  _id: string;
  username: string;
  email: string;
  hashedPassword: string;
  isActive: boolean;
  isAdmin: boolean;
}
