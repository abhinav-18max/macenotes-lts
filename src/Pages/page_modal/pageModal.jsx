import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import DocGetter from "../../components/docGetter";
import "./pageModal.css";
import { FaArrowRightLong } from "react-icons/fa6";

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
      <header className="mainHeading">
        <h1>{props.heading}</h1>
      </header>
      <section className="sec">
        <Container>
          s
          <Row>
            {subjects.map((subject) =>
              subject != "" ? (
                <Col lg={4} md={6} className="py-4">
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
                            &emsp;
                            <FaArrowRightLong className="arr" />
                          </li>
                        ))}
                        {subject == "BASICS OF ELECTRONICS ENGINEERING" ||
                        subject == "BASICS OF CIVIL ENGINEERING" ? (
                          <li
                            className="mods"
                            onClick={() => {
                              setmod("MODULE 6");
                              setsub(subject);
                              callerUp(true);
                            }}
                          >
                            MODULE 6&emsp;
                            <FaArrowRightLong className="arr" />
                          </li>
                        ) : null}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
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
