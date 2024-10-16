import { User } from "../../types/types";

interface IUserModel {
  user: User;
  getUser(userId: string): User;
  setUser(user: User): void;
  checkUserValidation(data: Record<keyof User, string>): boolean;
}

export class UserModel implements IUserModel {
  user: User;
  getUser(userId: string): User {
    throw new Error("Method not implemented.");
  }
  setUser(user: User): void {
    throw new Error("Method not implemented.");
  }
  checkUserValidation(data: Record<keyof User, string>): boolean {
    throw new Error("Method not implemented.");
  }
}
