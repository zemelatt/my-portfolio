import "./work.css";
import Img from "../assets/Screenshot (32).png";
import Img2 from "../assets/Screenshot (39).png";

import { AiOutlineLine } from "react-icons/ai";
import WorkProp from "./WorkProp";
import { useState } from "react";

function Work() {
  const [fade, SetFade] = useState("");
  const [fade2, SetFade2] = useState("");
  window.addEventListener("scroll", () => {
    let ScrolPos = window.scrollY;
    if (ScrolPos > 2150 && ScrolPos < 2750) {
      SetFade("fade");
    } else {
      SetFade("");
    }
  });
  window.addEventListener("scroll", () => {
    let ScrolPos = window.scrollY;
    if (ScrolPos > 2450 && ScrolPos < 3250) {
      SetFade2("fade2");
    } else {
      SetFade2("");
    }
  });
  return (
    <>
      {" "}
      <h1 className="aboutWork">
        <span>
          <AiOutlineLine className="lines" />
        </span>
        Work
      </h1>
      <div id="work" className={`work `}>
        <div className={`mainContainer ${fade}`}>
          <WorkProp
            nameOfWeb="Shoping Cart"
            Descripton1="  It is My first project, just for testing my javascript skill, 
          not focused on Ux/Ui. Using javascript, MySQL database and EJS template."
            Descripton2="This Project builds a shopping cart. Also, allows the user to push the selected goods into the Shopoing-cart and
           know the sum of their goods cost. it also lets the admin add or remove the products."
            links="https://github.com/zemelatt/lrn-e-com"
            photo={Img2}
          />
        </div>
        <div className={`mainContainer2 ${fade2}`}>
          <WorkProp
            nameOfWeb="Shear Your Adventure"
            Descripton1=" An  adventure-sharing web built from scratch using React, Redux toolkit and
          node/express to store information about the user and the
          adventure-related information."
            Descripton2=" This web supports sharing adventures and locations. Also, allows the
          user to like their favorite experience."
            links="https://github.com/zemelatt/ADV"
            photo={Img}
          />
        </div>
      </div>
    </>
  );
}
export default Work;
