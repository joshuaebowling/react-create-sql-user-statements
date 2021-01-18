/// <reference path="./index.d.ts" />
import { IUser } from "./IUser";
import { IInputs } from "./IInputs";

import React, { useState, useEffect } from "react";
import AddUser from "./AddUser";
import Users from "./Users";

import { AddUserGenerator } from "./AddUserGenerator";

const DefineInputs: React.FunctionComponent<{
  setGeneratedSQL: (value: string) => void;
}> = ({ setGeneratedSQL }) => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [address, setAddress] = useState("");
  const [databaseName, setDatabaseName] = useState("");
  const [inputs, setInputs] = useState<IInputs | null>(null);
  const generate = () => {
    if (inputs === null) return;
    const result = AddUserGenerator(inputs);
    setGeneratedSQL(result.join("\n"));
  };
  useEffect(() => {
    if (users.length === 0 || address === "" || databaseName === "") return;
    setInputs({ address, users, databaseName });
  }, [users, address, databaseName]);
  return (
    <div>
      <label
        htmlFor="address"
        title="such as localhost, domain name, or ip address"
      >
        [?]address
      </label>
      <input
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <label title="the database name" htmlFor="database">
        [?]database
      </label>
      <input
        name="database"
        value={databaseName}
        onChange={(e) => setDatabaseName(e.target.value)}
      />
      <p>fill out form, then click submit to add a user. </p>
      <AddUser add={(user) => setUsers([user, ...users])} />
      <br />
      <Users users={users} clearAll={() => setUsers([])} generate={generate} />
      <hr />
    </div>
  );
};

export default DefineInputs;
