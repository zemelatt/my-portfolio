import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { useState } from "react";
const WorkProp = ({ nameOfWeb, Descripton1, Descripton2, links, photo }) => {
  const [rotate, SetRotate] = useState("");

  window.addEventListener("scroll", () => {
    let ScrolPos = window.scrollY;
    if (ScrolPos > 1750 && ScrolPos < 4000) {
      SetRotate("startRotat");
    } else {
      SetRotate("");
    }
  });
  return (
    <div className={`myWorks ${rotate}`}>
      <div className="workCover"></div>
      <div className="aboutWEB">
        <h2 className="topic">{nameOfWeb} </h2>

        <p className="webDescription">{Descripton1}</p>

        <p className="webAbility">{Descripton2}</p>
      </div>
      <div className="imgDisplay">
        <div className="coverLay">
          <a href={links} target="_blank" rel="noopener noreferrer">
            <h1 className="check">
              <BiLinkExternal className="checkIcon" />
            </h1>
          </a>
        </div>

        <img className="advImg" src={photo} alt="work sample" />
      </div>
    </div>
  );
};

export default WorkProp;
