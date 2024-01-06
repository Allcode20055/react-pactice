import React, { useState } from "react";
import style from "./Form.module.css";

export default function FormControl() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const HandelChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form action="" onSubmit={FormSubmit}>
      <div className={style.mystyle}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          //   onChange={HandelNameValue}
          onChange={HandelChangeValue}
          required
        />
      </div>

      <div className={style.mystyle}>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          //   onChange={HandelEmailValue}
          onChange={HandelChangeValue}
        />
      </div>

      <div className={style.mystyle}>
        <label htmlFor="passworld">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          //   onChange={HandelPasswordValue}
          onChange={HandelChangeValue}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
