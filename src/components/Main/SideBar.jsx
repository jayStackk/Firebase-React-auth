import "./SideBar.css";
import { useState } from "react";

export default function NewSide() {


  const [isOpen, setopen] = useState(true);
  const toggleSidebar = () => {
    setopen(!isOpen);
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
    </div>
  );
}
