import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { NavLink } from "react-router-dom";
import Navigationbar from "../navigationbar/navigationbar";
import Social from "../social/social";

function Home() {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const semesters = [
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  const courses = [
    "First Year",
    "Computer Science",
    "Electronics & Communication",
    "Electrical and Electronics",
    "Mechanical",
    "Civil",
  ];

  const handleChangeCourse = (e) => {
    setSelectedCourse(e.target.value);
    const dept_selected = e.target.value;
    setSelectedSemester("");
  };

  const handleChangeSemester = (e) => {
    setSelectedSemester(e.target.value);
    const sem_selected = e.target.value;
  };
  return (
    <>
      <section className="landing-page">
        <Navigationbar />
        <section className="home-page">
          <div className="home-items">
            <h1 className="macenotes">
              MACE <br />
              <span>NOTES</span>
            </h1>
          </div>
          <div className="home-items">
            <select
              id="course"
              value={selectedCourse}
              onChange={handleChangeCourse}
              required
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {selectedCourse != "First Year" && (
              <div>
                <select
                  id="semster"
                  value={selectedSemester}
                  onChange={handleChangeSemester}
                  required
                >
                  <option value="">Select a semester</option>
                  {semesters.map((semester) => (
                    <option key={semester} value={semester}>
                      {semester}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button className="search my-1">
              <NavLink to={"/" + selectedCourse}>Search</NavLink>
            </button>
          </div>
        </section>
        <Social />
      </section>
    </>
  );
}

export default Home;
