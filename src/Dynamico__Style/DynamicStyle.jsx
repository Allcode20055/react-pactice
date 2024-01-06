import React, { useEffect, useState } from "react";

// import "./dynamicStyle.css";
import style from "./dynamic.module.css";

const DynamicStyle = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(true);

  const handelOnChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue.length >= 2) {
      setInputError(false);
    } else {
      setInputError(true);
    }
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter any think"
        onChange={handelOnChange}
        value={inputValue}
        // className={`${inputError ? "valid" : "inValid"}`}
        // className={inputError ? "valid" : "inValid"}
        className={inputError ? style.valid : style.inValid}
      />
    </div>
  );
};

export default DynamicStyle;
