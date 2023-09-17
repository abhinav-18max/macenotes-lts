import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import DocGetter from "../../components/docGetter";
import "./pageModal.css";

function Pagemodal(props) {
  const subjects = props.sem;
  const modules = ["MODULE 1", "MODULE 2", "MODULE 3", "MODULE 4", "MODULE 5"];
  const [sub, setsub] = useState("");
  const [mod, setmod] = useState("");
  const [caller, callerUp] = useState(false);
  function close() {
    callerUp(false);
  }
  return (
    <div>
      <header className="text py-5">
        <h1 className="heading py-3">{props.heading}</h1>
      </header>
      <section className="sec">
        <Container>
          s
          <Row>
            {subjects.map((subject) =>
              subject != "" ? (
                <Card className="contents" key={subject}>
                  <Card.Header>
                    <h6>{subject}</h6>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      {modules.map((module) => (
                        <li
                          className="mods"
                          key={module}
                          onClick={() => {
                            setmod(module);
                            setsub(subject);
                            callerUp(true);
                          }}
                        >
                          {module}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              ) : null
            )}
          </Row>
          <br></br>
          <Row>
            {caller && <DocGetter module={mod} subject={sub} closer={close} />}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Pagemodal;
