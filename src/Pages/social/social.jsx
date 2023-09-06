import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./social.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Social() {
  return (
    <section className="social">
      <div>
        <a href="#">
          <FaInstagram className="social-icons mx-2" />
        </a>
        <a href="#">
          <FaLinkedin className="social-icons mx-2" />
        </a>
        <a href="#">
          <FaTwitter className="social-icons mx-2" />
        </a>
        <a href="#">
          <FaGithub className="social-icons mx-2" />
        </a>
        <a href="#">
          <FaEnvelope className="social-icons mx-2" />
        </a>
      </div>
      <div>
        <p>
          This is an open-source project Developed by students of Mar Athanasius
          College of Engineering
        </p>
      </div>
    </section>
  );
}

export default Social;
