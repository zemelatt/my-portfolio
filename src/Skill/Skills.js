import React, { useState } from "react";
import "./skill.css";
import { AiOutlineLine } from "react-icons/ai";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { DiGit } from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { DiPython } from "react-icons/di";
// import { DiDjango } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";

const Skills = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [react, setReact] = useState("");
  const [mysql, setMysql] = useState("");
  const [github, setGithub] = useState("");
  const [git, setgit] = useState("");
  const [docker, setDocker] = useState("");
  const [figma, setFigma] = useState("");
  const [vscode, setVscode] = useState("");
  const [redux, setRedux] = useState("");
  window.addEventListener("scroll", () => {
    let Ypos = window.scrollY;
    if (Ypos > 1500 && Ypos < 2300) {
      setHtml("ofHtml");
      setCss("ofCss");
      setJs("ofJs");
      setReact("ofReact");
      setRedux("ofredux");
      setMysql("ofmysql");

      setGithub("ofgithub");
      setgit("ofgit");
      setDocker("ofdocker");
      setFigma("offigma");
      setVscode("ofvscode");
    } else {
      setHtml("");
      setCss("");
      setJs("");
      setReact("");
      setRedux("");
      setMysql("");
      setGithub("");
      setgit("");
      setDocker("");
      setFigma("");
      setVscode("");
    }
  });
  return (
    <>
      <h1 className="aboutSkill">
        <span>
          <AiOutlineLine className="lines" />
        </span>
        Skills
      </h1>
      <div id="skill" className="Skill">
        <p className="skill_header">
          Technologies I’ve been working with recently
        </p>
        <div className="skill_container">
          <div className="skill_list">
            <ul className="skillList1">
              <li className={`skills docker ${docker}`}>
                <DiDocker className="listIcon docker" /> <div>Docker</div>
              </li>
              <li className={`skills mysql ${mysql}`}>
                <SiPhp className="listIcon php" /> PHP
              </li>
              <li className={`skills mysql ${figma} `}>
                <TbBrandLaravel className="listIcon laravel" />
                Laravel
              </li>
              <li className={`skills js ${js}`}>
                <SiJavascript className="listIcon js" /> Javascript
              </li>
              <li className={`skills react ${react}`}>
                <FaReact className="listIcon react" /> React
              </li>
              <li className={`skills redux ${redux}`}>
                <SiRedux className="listIcon redux" /> Redux/toolkit
              </li>
              <li className={`skills redux ${figma} `}>
                <TbBrandNextjs className="listIcon redux" /> Next.js
              </li>

              <li className={`skills js ${js}`}>
                <DiPython className="listIcon js" /> Python
              </li>

              <li className={`skills mysql ${mysql}`}>
                <SiMysql className="listIcon mysql" /> MySQL
              </li>
              <li className={`skills mysql figma ${figma} `}>
                <DiMongodb className="listIcon mongo " /> Mongodb
              </li>
              <li className={`skills git ${git}`}>
                <DiGit className="listIcon git" /> Git
              </li>
              <li className={`skills github ${github}`}>
                <AiFillGithub className="listIcon github" />
                Github
              </li>
              <li className={`skills figma ${figma}`}>
                <FiFigma className="listIcon figma" /> Figma
              </li>

              <li className={`skills css ${css}`}>
                <FaCss3Alt className="listIcon css" /> Css
              </li>
              <li className={`skills html ${html}`}>
                <AiFillHtml5 className="listIcon html" />
                Html
              </li>
              {/* <li className={`skills css ${css}`}>
                <SiMui className="listIcon css" /> Matrial UI
              </li> */}

              {/* </ul>
            <ul className="skillList2 "> */}

              <li className={`skills figma ${vscode}`}>
                <SiVisualstudiocode className="listIcon vscode" /> Vs code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
