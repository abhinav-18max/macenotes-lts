import { useState, useEffect } from "react";
import "./EEE.css";

let sem_3_sub = [
  {
    name: "eee",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sfdfub2",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "subd3",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "subsdfsdf4",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "subdsvsd5",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "subdvdv6",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
];
let sem_4_sub = [
  {
    name: "fff",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub2",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub3",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "dvdvsub4",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "subvd5",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub6",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
];
let sem_5_sub = [
  {
    name: "ggg",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "subdd2",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub3",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub4",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub5",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub6",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
];
let sem_6_sub = [
  {
    name: "hhh",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "suddb2",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub3",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "subdd4",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub5",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "suddb6",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
];
let sem_7_sub = [
  {
    name: "iii",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub2",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub3",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub4",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub5",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub6",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
];
let sem_8_sub = [
  {
    name: "jjj",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub2",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub3",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub4",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub5",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
  {
    name: "sub6",
    modules: ["module1", "module2", "module3", "module4", "module5", "module6"],
  },
];

export default function EEE() {
  let semesters = [3, 4, 5, 6, 7, 8];
  const [sem, setSem] = useState(3);
  const [subjects, setsubjects] = useState(sem_3_sub);
  return (
    <section className="section">
      <div>
        <h2>Electrical and Electronics Engineering</h2>
      </div>
      <div className="semester">
        <ul className="sem-nav">
          {semesters.map((semester) => (
            <li>
              <button
                id={"sem" + semester}
                className="btn-sem"
                onClick={() => {
                  setSem(semester);
                  setsubjects(eval("sem_" + semester + "_sub"));
                  document.getElementById("sem" + semester).style.color =
                    "white";
                  document.getElementById(
                    "sem" + semester
                  ).style.backgroundColor = "#547CF5";
                  for (var i = 3; i <= 8; i++) {
                    if (i != semester) {
                      document.getElementById("sem" + i).style.color =
                        "#547CF5";
                      document.getElementById("sem" + i).style.backgroundColor =
                        "#2c2b2b";
                    }
                  }
                }}
              >
                Semester {semester}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cardHolder">
        {subjects.map((subject) => (
          <div className="card">
            <div>
              <h4>{subject.name}</h4>
            </div>
            <hr />
            <div>
              <ul className="modules">
                {subject.modules.map((module) => (
                  <li className="module-item">{module}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
