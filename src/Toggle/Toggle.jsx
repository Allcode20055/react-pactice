import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      style={{ margin: "1rem", padding: "1rem", backgroundColor: "hotpink" }}
    >
      {toggle && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          voluptates exercitationem sequi at officia veniam beatae laborum, fuga
          magnam iste numquam in aliquam. Totam aliquam autem similique impedit
          atque?
        </p>
      )}

      <div style={{ textAlign: "center" }}>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
