import React, { useState } from "react";
import "./navigationbar.css";
import { NavLink } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { FaXmark } from "react-icons/fa6";
import DocumentUploader from "../contribute/contribute";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigationbar() {
  const [nav, setNav] = useState(true);
  const nav_active = () => {
    setNav(!nav);
  };
  return (
    <section>
      <div className="ham-burger" onClick={nav_active}>
        <VscMenu />
      </div>
      <div className={nav ? "ham-burger-options" : "ham-burger-options-active"}>
        <span onClick={nav_active}>
          <FaXmark />
        </span>
        <div>Home</div>
        <div>About Us</div>
        <div>Contribute</div>
      </div>
      <div className="navigationbar">
        <div className="navbar">
          <div className="nav-bar logo">LOGO</div>
          <div className="nav-bar contibute px-4 py-2">
            <NavLink to="/contribute">CONTRIBUTE</NavLink>
          </div>
          <div className="navbar home-about">
            <div className="ms-4 home nav-bar">HOME</div>
            <div className="ms-4 about nav-bar">ABOUT US</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigationbar;
