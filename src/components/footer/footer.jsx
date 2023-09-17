import React from "react";
import "./footer.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const devs = [
  {
    name: "person1",
    gitLink: "https://github.com/",
  },
  {
    name: "person2",
    gitLink: "google.com",
  },
  {
    name: "person3",
    gitLink: "google.com",
  },
];

export default function Footer() {
  return (
    <div className="row ftr">
      <div className="col-md-7 hdng">
        <h2>
          MACE<span>NOTES</span>
        </h2>
      </div>
      <div className="col-md-5 links">
        <h6>Made with love by</h6>
        <ul>
          {devs.map((dev) => (
            <li key={dev.name}>
              <a href={dev.gitLink} target="blank">
                {dev.name} <FaExternalLinkAlt className="externalLink" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
