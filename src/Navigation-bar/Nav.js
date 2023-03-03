import React, { useState } from "react";

import "./nav.css";
function Nav() {
  const [burger, setBerger] = useState("humburger ");
  const [activeOption, setOption] = useState("");
  const updatemenu = () => {
    if (burger !== "humburger is-active") {
      setBerger("humburger is-active");
      setOption("activate");
    } else {
      setOption(" ");
      setBerger("humburger");
    }
  };
  return (
    <div className="nav">
      <ul className="Navigationlist">
        <li>
          <a href="#home" className="logo">
            <span className="ang">&lang;</span>
            Z.M
            <span className="ang">&rang;</span>
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#home">Home</a>
        </li>
        <>
          <button className={burger} onClick={updatemenu}>
            <div className="bar"></div>
          </button>
        </>
      </ul>
      <nav className={`side-Option ${activeOption}`}>
        <ul className="NavigationOnSide">
          <li>
            <a href="#home" className="humList">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="humList">
              About
            </a>
          </li>
          <li>
            <a href="#skill" className="humList">
              Skill
            </a>
          </li>
          <li>
            <a href="#work" className="humList">
              {" "}
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className="humList">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
