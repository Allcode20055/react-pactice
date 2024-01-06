import React, { useEffect, useState } from "react";

const DataFatch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Data not fetch");
          }
          return res.json();
        })

        .then((data) => {
          setTodos(data);
          setIsLoding(false);
          setErrors(null);
        })
        .catch((error) => {
          setErrors(error.message);
          setIsLoding(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      {errors && <p>{errors}</p>}
      {isLoding && <p>Data Loding ...</p>}
      {todos &&
        todos.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
};

export default DataFatch;
