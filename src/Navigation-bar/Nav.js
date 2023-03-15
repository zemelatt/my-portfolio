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
          <a href="#home" id="logo" className="logo">
            <span className="ang">&lang;</span>
            ZM
            <span className="ang">&rang;</span>
          </a>
        </li>
        <li>
          <a href="#contact" id="navops">
            Contact
          </a>
        </li>
        <li>
          <a href="#work" id="navops">
            Work
          </a>
        </li>
        <li>
          <a href="#skill" id="navops">
            Skill
          </a>
        </li>
        <li>
          <a href="#about" id="navops">
            About
          </a>
        </li>

        <li>
          <a href="#home" id="navops">
            Home
          </a>
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
