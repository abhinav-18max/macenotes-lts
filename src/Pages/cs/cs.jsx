import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./cs.css";
import axios from "axios";
import DocGetter from "../../components/docGetter";

function Cs() {
  const [firstsub, setfirstsub] = useState("LS");
  const [secondsub, setsecondsub] = useState("LAAC");
  const [thirdsub, setthirdsub] = useState("Chemistry");
  const [fourthsub, setfourthsub] = useState("");
  const [sem, setsem] = useState("semester 3");
  const [sub, setsub] = useState("LS");
  const [mod, setmod] = useState("MODULE 1");
  const [caller, callerUp] = useState(false);
  function close() {
    callerUp(false);
    console.log("hello");
  }

  useEffect(() => {
    const x = [firstsub, secondsub, thirdsub, fourthsub];
    for (var i = 0; i < 4; i++) {
      var y = "sub" + (i + 1);
      const sub = document.getElementById(y);
      if (x[i] == "") sub.style.opacity = 0;
      else sub.style.opacity = 1;
    }
  });
  return (
    <div>
      <header className="text py-5">
        <h1 className="heading py-3">Computer science</h1>
        <div>
          <button
            className="sems"
            id="sem3"
            style={{ backgroundColor: "#547CF5", color: "rgb(0, 0, 0)" }}
            onClick={() => {
              setfirstsub("LS");
              setsecondsub("LAAC");
              setthirdsub("Chemistry");
              setfourthsub("");
              setsem("semester 3");
              document.getElementById("sem4").style.backgroundColor =
                "rgba(0, 0, 0, 0)";
              document.getElementById("sem4").style.color = "#547CF5";
              document.getElementById("sem3").style.backgroundColor = "#547CF5";
              document.getElementById("sem3").style.color = "black";
            }}
          >
            semester 3
          </button>
          <button
            className="sems"
            id="sem4"
            onClick={() => {
              setfirstsub("VCDE");
              setsecondsub("P Com");
              setthirdsub("Physics");
              setfourthsub("fourth sub");
              setsem("semester 4");
              document.getElementById("sem3").style.backgroundColor =
                "rgba(0, 0, 0, 0)";
              document.getElementById("sem3").style.color = "#547CF5";
              document.getElementById("sem4").style.backgroundColor = "#547CF5";
              document.getElementById("sem4").style.color = "black";
            }}
          >
            semester 4
          </button>
          <button className="sems" id="sem5">
            semester 5
          </button>
          <button className="sems" id="sem6">
            semester 6
          </button>
          <button className="sems" id="sem7">
            semester 7
          </button>
          <button className="sems" id="sem8">
            semester 8
          </button>
        </div>
      </header>
      <section className="sec py-5">
        <Container>
          <Row>
            <Col md={4}>
              <Card className="contents" id="sub1">
                <Card.Header>
                  <h5>{firstsub}</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(firstsub);
                        callerUp(true);
                      }}
                    >
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(firstsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    {" "}
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(firstsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    {" "}
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(firstsub);
                      }}
                    >
                      MODULE 4
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 5");
                        callerUp(true);
                        setsub(firstsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="contents" id="sub2">
                <Card.Header>
                  <h5>{secondsub}</h5>
                </Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="contents" id="sub3">
                <Card.Header>
                  <h5>{thirdsub}</h5>
                </Card.Header>
                <Card.Body></Card.Body>
              </Card>
              <Card className="contents" id="sub4">
                <Card.Header>
                  <h5>{fourthsub}</h5>
                </Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            {caller && <DocGetter module={mod} subject={sub} closer={close} />}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Cs;
