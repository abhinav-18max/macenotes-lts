import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { NavLink } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Social from "../social/social";

function Home() {
  return (
    <>
      <Navigation />
      <section className="landing-page">
        <div className="land-top p-4">
          <h1 className="my-3">HEY THERE,</h1>
          <h3 className="my-2">Hitting the books last minute? We got you!</h3>
          <button className="btn-1 btn my-2">Go to Shelf</button>
          <h5 className="my-2">
            Remember to pay it forward too, You can share your notes here:&#41;
          </h5>
          <NavLink to="/contribute">
            <button className="btn-2 btn my-2">Contibute</button>
          </NavLink>
        </div>
        <div className="land-mid p-4">
          <h2 className="my-2">ABOUT US</h2>
          <p className="my-2 py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="land-btm">
          <Social />
        </div>
      </section>
    </>
  );
}

export default Home;
