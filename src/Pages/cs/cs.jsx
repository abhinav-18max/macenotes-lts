import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./cs.css";
import Navigation from "../../components/navigation/navigation";
import Social from "../../components/social/social";
import DocGetter from "../../components/docGetter";

function Cs() {
  const [firstsub, setfirstsub] = useState("DISCRETE MATHEMATICAL STRUCTURES");
  const [secondsub, setsecondsub] = useState("DATA STRUCTURES");
  const [thirdsub, setthirdsub] = useState("LOGIC SYSTEM DESIGN");
  const [fourthsub, setfourthsub] = useState(
    "OBJECT ORIENTED PROGRAMMING USING JAVA"
  );
  const [fifthsub, setfifthsub] = useState("DESGN AND ENGINEERING");
  const [sixthsub, setsixthsub] = useState("PROFESSIONAL ETHICS");
  const [seventhsub, setseventhsub] = useState("SUSTAINABLE ENGINEERING");
  const [eighthsub, seteighthsub] = useState("MINORS");
  const [ninthsub, setninthsub] = useState("");
  const [tenthsub, settenthsub] = useState("");
  const [eleventhsub, seteleventhsub] = useState("DISTRIBUTED COMPUTING");

  const [sub, setsub] = useState("LS");
  const [mod, setmod] = useState("MODULE 1");
  const [caller, callerUp] = useState(false);
  function close() {
    callerUp(false);
  }
  function subSetter(a, b, c, d, e, f, g, h, i, j, k, semester) {
    setfirstsub(a);
    setsecondsub(b);
    setthirdsub(c);
    setfourthsub(d);
    setfifthsub(e);
    setsixthsub(f);
    setseventhsub(g);
    seteighthsub(h);
    setninthsub(i);
    settenthsub(j);
    seteleventhsub(k);
    for (var l = 3; l <= 8; l++) {
      const m = "sem" + l;
      if (m == semester) {
        document.getElementById(m).style.backgroundColor = "#547CF5";
        document.getElementById(m).style.color = "black";
      } else {
        document.getElementById(m).style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById(m).style.color = "#547CF5";
      }
    }
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
      if (x[i] == "") sub.style.opacity = 0;
      else sub.style.opacity = 1;
    }
  });
  return (
    <div>
      <Navigation />
      <header className="text py-5">
        <h1 className="heading py-3">Computer science</h1>
        <div>
          <button
            className="sems"
            style={{ backgroundColor: "#547CF5", color: "black" }}
            id="sem3"
            onMouseEnter={() => {
              document.getElementById("sem3").style.backgroundColor = "#547CF5";
              document.getElementById("sem3").style.color = "black";
            }}
            onMouseLeave={() => {
              document.getElementById("sem3").backgroundColor = "black";
              document.getElementById("sem3").color = "#547CF5";
            }}
            onClick={() => {
              callerUp(false);
              subSetter(
                "DISCRETE MATHEMATICAL STRUCTURES",
                "DATA STRUCTURES",
                "LOGIC SYSTEM DESIGN",
                "OBJECT ORIENTED PROGRAMMING USING JAVA",
                "DESGN AND ENGINEERING",
                "PROFESSIONAL ETHICS",
                "SUSTAINABLE ENGINEERING",
                "MINORS",
                "",
                "",
                "",
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
                "GRAPH THEORY",
                "PROBABILITY AND STATISTICAL MODELLING",
                "COMPUTER ORGANIZATION AND ARCHITECTURE",
                "DATABASE MANAGEMENT SYSTEMS",
                "OPERATING SYSTEMS",
                "DESIGN AND ENGINEERING",
                "PROFESSIONAL ETHICS",
                "CONSTITUTION OF INDIA",
                "HONOURS",
                "MINORS",
                "",
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
                "FORMAL LANGUAGE AND AUTOMATA THEORY",
                "COMPUTER NETWORKS",
                "SYSTEM SOFTWARE",
                "MICROPROCESSORS AND MICROCONTROLLERS",
                "DATA ANALYTICS",
                "BIG DATA ANALYSIS",
                "MANAGEMENT OF SOFTWARE SYSTEMS",
                "DISASTER MANAGEMENT",
                "HONOURS",
                "MINORS",
                "",
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
                "COMPILER DESIGN",
                "COMPUTER GRAPHICS AND IMAGE PROCESSING",
                "MACHINE LEARNING CONCEPTS",
                "ALGORITHM ANALYSIS AND DESIGN",
                "PROGRAM ELECTIVE I-CS",
                "PROGRAM ELECTIVE I-CS(DS)",
                "INDUSTRIAL ECONOMICS AND FOREIGN TRADE",
                "COMPREHENSIVE COURSE WORK CONCEPTS",
                "HONOURS",
                "MINORS",
                "",
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
                "ARTIFICIAL INTELLIGINCE",
                "CONCEPTS IN CLOUD COMPUTNG",
                "PROGRAM ELECTIVE II-CS",
                "PROGRAM ELECTIVE II-CS(DS)",
                "OPEN ELECTIVE-CS",
                "OPEN ELECTIVE-CS(DS)",
                "INDUSTRIAL SAFETY ENGINEERING",
                "HONOURS",
                "MINORS",
                "",
                "",
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
                "DISTRIBUTED COMPUTING",
                "DEEP LEARNING FOR DATA SCIENCE",
                "PROGRAM ELECTIVE III-CS",
                "PROGRAM ELECTIVE III-CS(DS)",
                "PROGRAM ELECTIVE IV-CS",
                "PROGRAM ELECTIVE 1V-CS(DS)",
                "PROGRAM ELECTIVE V-CS",
                "PROGRAM ELECTIVE V-CS(DS)",
                "COMPREHENSIVE COURSE VIVA",
                "HONOURS",
                "MINORS",
                "sem8"
              );
            }}
          >
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
      <Social />
    </div>
  );
}

export default Cs;
