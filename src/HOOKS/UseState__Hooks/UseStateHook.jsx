import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  const HandelChange = () => {
    setCount((previValue) => previValue + 1);
    // setCount((previValue) => previValue + 1);
    // setCount((previValue) => previValue + 1);
  };
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={HandelChange}>Increment</button>
    </div>
  );
}
