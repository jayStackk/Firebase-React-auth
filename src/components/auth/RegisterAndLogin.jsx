import React, { useState } from "react";
import { auth } from "./firebase";
import './LoginRegister.css'
// import Auth from './firebase'
// import { database } from "./FirebaseConfig";
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
    if (type == "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
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
    <>
   <div className="login">
      {/* Registration and login Screen */}
      <div className="row">
        <div
          className="nonactive"
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
        <div
          className="active"
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
      </div>
      <h1>{login ? "Log in" : "Register"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <input className="text" type="email" name="email" placeholder="Email" />
        <br />
        <input className="text" type='password' name="password" placeholder="Password"/>
        <br />
        <button className="signin">{login ? "SignIn" : "SignUp"}</button>
        <p onClick={handleReset}>Forgot Password?</p>
        <br />
      </form>
    </div>
    </>
 
  );
}


export default RegisterAndLogin;