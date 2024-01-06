import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  console.log(uuidv4());
  return (
    <>
      <h2 className="todoHeader">Todo App</h2>
      {Data.map(({ title, dasc, phones }) => (
        <Card title={title} dasc={dasc} phones={phones} key={uuidv4()} />
      ))}
    </>
  );
}

export default App;
