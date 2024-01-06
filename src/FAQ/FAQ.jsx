import React, { useState } from "react";

import style from "./faq.module.css";

const FAQ = ({ title, dasc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className={style.articles}>
      <div>
        <h4>{title}</h4>
        <button onClick={() => setToggle(!toggle)}>{toggle ? "-" : "+"}</button>
      </div>
      {toggle && <p>{dasc}</p>}
    </article>
  );
};

export default FAQ;
