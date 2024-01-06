import React, { useEffect, useState } from "react";

const UseEffectPactice = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("i am useEffect");
  });

  //   setInterval(() => {
  //     setCount(count + 1);
  //   }, 2000);

  return (
    <div>
      {console.log("i am Render")}
      <h4>{count}</h4>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setToggle(!toggle)}>Toggles</button>
    </div>
  );
};

export default UseEffectPactice;
