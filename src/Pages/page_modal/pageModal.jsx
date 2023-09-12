import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./pageModal.css";

function Pagemodal(props) {
  const firstsub = props.sem[0];
  const secondsub = props.sem[1];
  const thirdsub = props.sem[2];
  const fourthsub = props.sem[3];
  const fifthsub = props.sem[4];
  const sixthsub = props.sem[5];
  const seventhsub = props.sem[6];
  const eighthsub = props.sem[7];
  const ninthsub = props.sem[8];
  const tenthsub = props.sem[9];
  const eleventhsub = props.sem[10];

  const [sub, setsub] = useState(props.sem[0]);
  const [mod, setmod] = useState("MODULE 1");
  const [caller, callerUp] = useState(false);
  function close() {
    callerUp(false);
  }

  useEffect(() => {
    const x = [
      firstsub,
      secondsub,
      thirdsub,
      fourthsub,
      fifthsub,
      sixthsub,
      seventhsub,
      eighthsub,
      ninthsub,
      tenthsub,
      eleventhsub,
    ];
    for (var i = 7; i < 11; i++) {
      var y = "sub" + (i + 1);
      const sub = document.getElementById(y);
      if (x[i] == "") sub.style.display = "none";
      else sub.style.display = "block";
    }
  });
  return (
    <div>
      <header className="text py-5">
        <h1 className="heading py-3">{props.heading}</h1>
      </header>
      <section className="sec">
        <Container>
          <Row>
            <Col
              md={4}
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "inline",
              }}
            >
              <Card className="contents" id="sub1">
                <Card.Header>
                  <h6>{firstsub}</h6>
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
                      {" "}
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
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(firstsub);
                        callerUp(true);
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

              <Card className="contents" id="sub4">
                <Card.Header>
                  <h6>{fourthsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(fourthsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(fourthsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(fourthsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(fourthsub);
                        callerUp(true);
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
                        setsub(fourthsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="contents" id="sub7">
                <Card.Header>
                  <h6>{seventhsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(seventhsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(seventhsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(seventhsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(seventhsub);
                        callerUp(true);
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
                        setsub(seventhsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="contents" id="sub10">
                <Card.Header>
                  <h6>{tenthsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(tenthsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(tenthsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(tenthsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(tenthsub);
                        callerUp(true);
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
                        setsub(tenthsub);
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
                  <h6>{secondsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(secondsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(secondsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(secondsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(secondsub);
                        callerUp(true);
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
                        setsub(secondsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="contents" id="sub5">
                <Card.Header>
                  <h6>{fifthsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(fifthsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(fifthsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(fifthsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(fifthsub);
                        callerUp(true);
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
                        setsub(fifthsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="contents" id="sub8">
                <Card.Header>
                  <h6>{eighthsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(eighthsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(eighthsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(eighthsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(eighthsub);
                        callerUp(true);
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
                        setsub(eighthsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="contents" id="sub11">
                <Card.Header>
                  <h6>{eleventhsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(eleventhsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(eleventhsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(eleventhsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(eleventhsub);
                        callerUp(true);
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
                        setsub(eleventhsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="contents" id="sub3">
                <Card.Header>
                  <h6>{thirdsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(thirdsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(thirdsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(thirdsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(thirdsub);
                        callerUp(true);
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
                        setsub(thirdsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="contents" id="sub6">
                <Card.Header>
                  <h6>{sixthsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(sixthsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(sixthsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(sixthsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(sixthsub);
                        callerUp(true);
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
                        setsub(sixthsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="contents" id="sub9">
                <Card.Header>
                  <h6>{ninthsub}</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 1");
                        setsub(ninthsub);
                        callerUp(true);
                      }}
                    >
                      {" "}
                      MODULE 1
                    </button>
                  </ul>
                  <ul>
                    <button
                      onClick={() => {
                        setmod("MODULE 2");
                        callerUp(true);
                        setsub(ninthsub);
                      }}
                      className="mods"
                    >
                      MODULE 2
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 3");
                        callerUp(true);
                        setsub(ninthsub);
                      }}
                    >
                      MODULE 3
                    </button>
                  </ul>
                  <ul>
                    <button
                      className="mods"
                      onClick={() => {
                        setmod("MODULE 4");
                        setsub(ninthsub);
                        callerUp(true);
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
                        setsub(ninthsub);
                      }}
                    >
                      MODULE 5
                    </button>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
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
