import React, { useState } from "react";
import "./styles.css";
import DefineInputs from "./DefineInputs";

export default function App() {
  const [generatedSQL, setGeneratedSQL] = useState<string | null>();
  const clear = () => setGeneratedSQL(null);
  return (
    <div className="App">
      <h1>Mysql Create Users</h1>
      <h2>WiP</h2>
      <DefineInputs setGeneratedSQL={setGeneratedSQL} />
      {generatedSQL !== null && (
        <>
          <button
            disabled={generatedSQL === null}
            type="button"
            onClick={clear}
          >
            clear sql
          </button>
          <br />
          <pre>{generatedSQL}</pre>
        </>
      )}
    </div>
  );
}
