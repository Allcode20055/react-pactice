import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastifyMessage = () => {
  const handelToastify = () => {
    toast("hi i am tostify message");
  };
  return (
    <div>
      <h4>Useging Toastify Message </h4>
      <button onClick={handelToastify}>Added Todos</button>
      <ToastContainer />
    </div>
  );
};

export default ToastifyMessage;
