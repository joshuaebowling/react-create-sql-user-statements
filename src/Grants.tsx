import React from "react";

const Grants = ({ grants }) => {
  return (
    <p>
      {grants.map((x) => (
        <span title="click to remove" onClick={() => removeGrant(x)}>
          {x}
        </span>
      ))}
    </p>
  );
};

export default Grants;
