import "./about.css";
import { useState } from "react";
import Img from "../assets/31485222.jpg";
import Person from "../assets/No-image-icon-0.png";

import { AiOutlineLine } from "react-icons/ai";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";
function Contact() {
  const [fade, setFade] = useState("");

  window.addEventListener("scroll", () => {
    let workPostion = window.scrollY;
    if (workPostion > 300 && workPostion < 1300) {
      setFade("fade");
    } else {
      setFade("no");
    }
  });

  return (
    <div className="allContainer">
      <h1 className="aboutme">
        <span>
          <AiOutlineLine className="lines" />
        </span>
        About Me
      </h1>
      <div id="about" className={`about ${fade}`}>
        <div className="imgContainerAbout">
          <img className="AboutImg" src={Img} alt="carton" />
        </div>
        <div className="SubContainer">
          <div className="moreAbout">
            I'm <span className="name">Zemelat menber</span>, who's well
            practised in taking{" "}
            <span className="name">fullstack applications</span> from scratch.
            I've worked using different technologies, both backend and frontend.
          </div>
          <div className="aboutBehave">
            Always seeking to be inspired, to envision the unlikely, to
            <span className="name"> work hard </span>
            for things that are worth it, and to be surrounded by those who
            bring out the best in me.
          </div>
          <div className="currentWork">
            <span className="name">My goal</span> is to build highly performant
            applications that solve real-world problems and provide users with
            an awesome experience.
          </div>
        </div>
      </div>
      <div className="OtherPeople">
        <div className="whatPeople">What people say..</div>
        <div className="peopleContainer">
          <div className="personDiv1">
            <div className="imgDiv">
              <p className="nameOfRef">Biruk anley</p>
              <img src={Person} className="personImg" alt="ref pics" />
              <p className="nameOfRef">Software engineer</p>
              <p className="Company">Addis ababa university</p>
            </div>
            <div className="reference">
              <p>
                Zemelat is an exceptional developer who possesses all the skills
                one would want in an excellent software developer. he masters
                the top programming languages. as far as I know, He had done on
                several projects, and I found him a highly skilled and dedicated
                . and he is also genius backend development. I highly recommend
                him to anyone looking for help on their team or designing
                project.
              </p>
              <p className="email">email: birukanley2022@gmail.com</p>
            </div>
          </div>
          <div className="personDiv2">
            <div className="imgDiv">
              <p className="nameOfRef">Keberleab eniyew</p>
              <img src={Person} className="personImg" alt="refpics" />

              <p className="nameOfRef">Software engineer</p>
              <p className="Company"> Merb tech enginering</p>
            </div>
            <div className="reference">
              <p>
                He is one of a person that can pass through stressful and
                challenging   environments. Also, he is a fast learner and the
                quickest to implement them, and he finishes assignments and
                projects faster than I expected. In my experience, I think he is
                the kind of person that every company needs to have.{" "}
              </p>
              <p className="email">email: kiberleabeniyew@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
