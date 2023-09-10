import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./pageModal.css";
import Navigation from "../navigation/navigation";
import DocGetter from "../../components/docGetter";

function Pagemodal(props) {
  window.addEventListener('load',(event)=>{
    console.log('loading');
  })
  const firstsub=props.sem[0];
  const secondsub = props.sem[1];
  const thirdsub = props.sem[2];
  const fourthsub = props.sem[3];
  const fifthsub = props.sem[4];
  const sixthsub = props.sem[5];
  const seventhsub= props.sem[6];
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
      <Navigation />
      <header className="text py-5">
        <h1 className="heading py-3">{props.heading}</h1>
<<<<<<< HEAD
       
=======
        <div>
          <button
            className="sems"
            style={{ backgroundColor: "#547CF5", color: "black" }}
            id="sem3"
            onClick={() => {
              callerUp(false);
              subSetter(
                props.sem3[0],
                props.sem3[1],
                props.sem3[2],
                props.sem3[3],
                props.sem3[4],
                props.sem3[5],
                props.sem3[6],
                props.sem3[7],
                props.sem3[8],
                props.sem3[9],
                props.sem3[10],
                "sem3"
              );
            }}
          >
            semester 3
          </button>
          <button
            className="sems"
            id="sem4"
            onClick={() => {
              callerUp(false);
              subSetter(
                props.sem4[0],
                props.sem4[1],
                props.sem4[2],
                props.sem4[3],
                props.sem4[4],
                props.sem4[5],
                props.sem4[6],
                props.sem4[7],
                props.sem4[8],
                props.sem4[9],
                props.sem4[10],
                "sem4"
              );
            }}
          >
            semester 4
          </button>
          <button
            className="sems"
            id="sem5"
            onClick={() => {
              callerUp(false);
              subSetter(
                props.sem5[0],
                props.sem5[1],
                props.sem5[2],
                props.sem5[3],
                props.sem5[4],
                props.sem5[5],
                props.sem5[6],
                props.sem5[7],
                props.sem5[8],
                props.sem5[9],
                props.sem5[10],
                "sem5"
              );
            }}
          >
            semester 5
          </button>
          <button
            className="sems"
            id="sem6"
            onClick={() => {
              callerUp(false);
              subSetter(
                props.sem6[0],
                props.sem6[1],
                props.sem6[2],
                props.sem6[3],
                props.sem6[4],
                props.sem6[5],
                props.sem6[6],
                props.sem6[7],
                props.sem6[8],
                props.sem6[9],
                props.sem6[10],
                "sem6"
              );
            }}
          >
            semester 6
          </button>
          <button
            className="sems"
            id="sem7"
            onClick={() => {
              callerUp(false);
              subSetter(
                props.sem7[0],
                props.sem7[1],
                props.sem7[2],
                props.sem7[3],
                props.sem7[4],
                props.sem7[5],
                props.sem7[6],
                props.sem7[7],
                props.sem7[8],
                props.sem7[9],
                props.sem7[10],
                "sem7"
              );
            }}
          >
            semester 7
          </button>
          <button
            className="sems"
            id="sem8"
            onClick={() => {
              callerUp(false);
              subSetter(
                props.sem8[0],
                props.sem8[1],
                props.sem8[2],
                props.sem8[3],
                props.sem8[4],
                props.sem8[5],
                props.sem8[6],
                props.sem8[7],
                props.sem8[8],
                props.sem8[9],
                props.sem8[10],
                "sem8"
              );
            }}
          >
            semester 8
          </button>
        </div>
>>>>>>> upstream/main
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
