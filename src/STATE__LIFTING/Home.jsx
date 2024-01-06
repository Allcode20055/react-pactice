import React, { useState } from "react";
import Todos from "./Todos";
import { NewTodos } from "./NewTodos";

const dummiTodos = ["banlgadesh", "india"];

const Home = () => {
  const [todos, setTodos] = useState(dummiTodos);

  const resiveNewTodos = (newTodos) => {
    setTodos([...todos, newTodos]);
  };

  return (
    <div>
      <NewTodos onResiveNewTodos={resiveNewTodos} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
