import React from "react";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-in-container">
      <form>
        <h1>Login</h1>
        <input type="email" placeholder="enter Email!" value={email}></input>
        <input
          type="password"
          placeholder="enter password!"
          value={password}
        ></input>
      </form>
    </div>
  );
};

export default SignIn;
