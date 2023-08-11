import { Button } from "react-bootstrap";
import "./SideBar.css";
import { useState } from "react";
import { auth } from "../firebase";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router-dom";


export default function NewSide() {
  const [isOpen, setopen] = useState(true);
  const toggleSidebar = () => {
    setopen(!isOpen);
  };

  const history = useNavigate();

  const handleClick = () => {
    signOut(auth).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };
  return (
    <div>
      <div
        className="sidebar"
        style={{
          width: `${isOpen ? "250px" : "0px"}`
        }}
      >
        <button
          class="openbtn"
          style={{
            display: `${isOpen ? "block" : "none"}`
          }}
          onClick={() => {
            toggleSidebar();
          }}
        >
          Close
        </button>

        <a href="/home">Clicker!</a>
        <a href="/miniproj">New App !</a>
        
      </div>

      <div
        id="main"
        style={{
          marginLeft: `${isOpen ? "250px" : "0px"}`
        }}
      >
        <button
          class="openbtn"
          style={{
            display: `${isOpen ? "none" : "block"}`
          }}
          onClick={() => {
            toggleSidebar();
          }}
        >
          Open
        </button>
        <h2 className="d-flex justify-content center"> Welcome to my page! </h2>
        <p className="d-flex justify-content center" style={{ fontSize: '20px'}}>
          Navigate by using the sidebar! Enjoy.
        </p>
      </div>

      <Button onClick={handleClick}>
          Sign out 
      </Button>
    </div>
  );
}
