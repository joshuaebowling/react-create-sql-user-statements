import { IUser } from "./IUser";

import React from "react";
import Grants from "./Grants";

const User: React.FunctionComponent<{
  user: IUser;
}> = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.password}</td>
      <td>
        <Grants grants={user.grants} />
      </td>
    </tr>
  );
};

const Users: React.FunctionComponent<{
  users: Array<IUser>;
  clearAll: () => void;
  generate: () => void;
}> = ({ users, clearAll, generate }) => {
  return (
    <table>
      <thead>
        <th colSpan={3}>
          <button type="button" onClick={clearAll}>
            clear all
          </button>
          <button onClick={generate}>generate</button>
        </th>
      </thead>
      <thead>
        <th>name</th>
        <th>password</th>
        <th>grants</th>
      </thead>
      <tbody>
        {users.map((x: IUser) => (
          <User user={x} />
        ))}
      </tbody>
    </table>
  );
};

export default Users;
