import React from "react";

import DataFetch from "../CoustomHooks/DataFetch";

const CoustomDataFetch = () => {
  const { data, isLoding, errors } = DataFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      {errors && <p>{errors}</p>}
      {isLoding && <p>Data Loding ...</p>}
      {data &&
        data.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
};

export default CoustomDataFetch;
