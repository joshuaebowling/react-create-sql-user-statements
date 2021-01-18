import { IUser } from "./IUser";

export interface IInputs {
  users: Array<IUser>;
  address: string;
  databaseName: string;
}
