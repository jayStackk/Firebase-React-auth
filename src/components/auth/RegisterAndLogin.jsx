import React, { useState } from "react";
import './LoginRegister.css'
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate(); 

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/dashboard");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/dashboard");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }
  return (

   <div>
   <div className="login">
      {/* Registration and login Screen */}
      <div className="row">
        <div
          style={{ fontSize: '25px'}}
          className="active glow"
          onClick={() => setLogin(false)}
          >
          Sign Up
        </div>
        <div
          style={{ fontSize: '25px'}}
          className="active glow"
          onClick={() => setLogin(true)}
          >
          Sign In
        </div>
      </div>
      <h1 style={{ fontSize: '40px'}} className="glowTwo">{login ? "Log in" : "Register"}</h1>
      <Form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <input className="text" type="email" name="email" placeholder="Email" />
        <br />
        <input className="text" type='password' name="password" placeholder="Password"/>
        <br />
        <button className="signin">{login ? "SignIn" : "SignUp"}</button>
        <p onClick={handleReset}>Forgot Password?</p>
        <br />
      </Form>
    </div>
    </div>
  
 
  );
}


export default RegisterAndLogin;