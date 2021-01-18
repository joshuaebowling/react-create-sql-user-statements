///<reference path="./index.d.ts" />
import { IUser } from "./IUser";
import { IInputs } from "./IInputs";

const template = (databaseName: string, address: string) => (user: IUser) => {
  return `
    -- CREATE ${user.name} --
    CREATE USER '${user.name}'@'${address}' IDENTIFIED BY '${user.password}';
    GRANT ${user.grants} ON ${databaseName}.* TO '${databaseName}'@'${address}'
  `;
};

export const makeUser = (name: string, password: string) => ({
  name,
  password
});

export const AddUserGenerator = (inputs: IInputs) => {
  // define the database
  const userTemplate = template(inputs.databaseName, inputs.address);
  const result = inputs.users.map((u: IUser) => userTemplate(u));
  return result;
};
