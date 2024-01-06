import React from "react";

export const ChildDataPassPerant = (props) => {
  const country = "bangladesh , india , pakisthan , ";
  props.OnCountryName(country);

  return (
    <div>
      <h2>{props.data}</h2>
    </div>
  );
};
