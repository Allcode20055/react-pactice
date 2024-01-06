import React, { useState } from "react";

export const NewTodos = (props) => {
  const [newTodos, setNewTodos] = useState("");

  const passNewTodos = (e) => {
    setNewTodos(e.target.value);
  };

  const handelSubmitTodos = (e) => {
    e.preventDefault();
    props.onResiveNewTodos(newTodos);
  };

  return (
    <form onSubmit={handelSubmitTodos}>
      <label htmlFor="addtodo">Add Todos : </label>
      <input
        type="text"
        name="newtodos"
        id="newTodos"
        onChange={passNewTodos}
      />
      <button>Add</button>
    </form>
  );
};
