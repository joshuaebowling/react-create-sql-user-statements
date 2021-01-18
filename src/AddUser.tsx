///<reference path="./index.d.ts" />
import { IUser } from "./IUser";
import React, { useState } from "react";
import { without } from "lodash";
const possibleGrants = [
  "Alter",
  "Alter routine",
  "Create",
  "Create routine",
  "Create tmp table",
  "Create view",
  "Delete",
  "Drop",
  "Event",
  "Execute",
  "Grant",
  "Index",
  "Insert",
  "Lock tables",
  "References",
  "Select",
  "Show view",
  "Trigger",
  "Update"
];

const Grant = ({ grant, removeGrant }) => {
  return (
    <span>
      {" "}
      <span onClick={() => removeGrant(grant)}>[x]</span>
      {grant}
    </span>
  );
};

/**
 * @param {Object} options - The shape is the same as SpecialType above
 * @param {add} options.prop1
 */
const AddUser: React.FunctionComponent<{ add: (user: IUser) => void }> = ({
  add
}) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [grants, setGrants] = useState<Array<string>>([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    add({ name, password, grants });
    setName("");
    setPassword("");
    setGrants([]);
  };
  const removeGrant = (grant) => {
    setGrants(without(grants, grant));
  };

  return (
    <form style={{ border: "1px solid black" }} onSubmit={handleSubmit}>
      <label htmlFor="name">username</label>
      <input
        name="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="pasword">password</label>
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <select onChange={(e) => setGrants([e.target.value, ...grants])}>
        {possibleGrants.map((x) => (
          <option value={x}>{x}</option>
        ))}
      </select>
      <input type="submit" name="add user" />
      {grants.length > 0 && (
        <p>
          {grants.map((x) => (
            <Grant removeGrant={removeGrant} grant={x} />
          ))}
        </p>
      )}
    </form>
  );
};

export default AddUser;
