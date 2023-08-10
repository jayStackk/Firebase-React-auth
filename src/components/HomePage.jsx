import React from "react";
import "./HomePage.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "./auth/firebase";
import { signOut } from "firebase/auth";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const history = useNavigate();

  const handleClick = () => {
    signOut(auth).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };

  // useEffect(() => {
  //     if (timer === 0) return;

  //     const interval = setInterval(() => {
  //         setTimer(timer - 1);
  //     }, 1000);

  //     return () => {
  //         clearInterval(interval);
  //     };
  // }, [timer]);

  return (
    <>
      <div className="home-container">
        {/* <Row>
          <Col className="home-timer"> Timer : {timer} </Col>

          <Col className="home-count">{count}</Col>

          <Button
            className="home-btn-start btn"
            onClick={() => {
              setTimer(10);
              setCount(0);
            }}
            disabled={timer !== 0}
          >
            start
          </Button>
        </Row> */}
        <Col className="home-timer"> Timer : {timer} </Col>

        <Col className="home-count">{count}</Col>

        <Button
          className="home-btn-start btn"
          onClick={() => {
            setTimer(10);
            setCount(0);
          }}
          disabled={timer !== 0}
        >
          start
        </Button>

        <button
          className="home-btn-click btn"
          onClick={() => setCount(count + 1)}
          disabled={timer === 0}
        >
          click me
        </button>
        <button
          className="home-btn-reset btn"
          onClick={() => {
            setCount(0);
            setTimer(0);
          }}
        >
          reset
        </button>
      </div>

      <button onClick={handleClick}>SignOut</button>
    </>
  );
}
