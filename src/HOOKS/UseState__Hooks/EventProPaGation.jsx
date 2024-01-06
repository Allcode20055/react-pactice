import React from "react";

export default function EventProPaGation() {
  const HandelChaildEvent = (event) => {
    console.log("Child", event);
    event.stopPropagation();
  };

  const HandelPerentEvent = (event) => {
    console.log("Perant", event);
  };

  return (
    <div onClick={HandelPerentEvent}>
      <h2>Propagation</h2>
      <button onClick={HandelChaildEvent}>Click here</button>
    </div>
  );
}
