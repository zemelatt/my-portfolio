import "./home.css";
import Img from "../assets/Tr.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div id="home" className="Home">
      <div className="verticalBarContainer">
        <AiFillGithub className="icons" />
        <FaLinkedin className="icons linkdin" />
        <div className="vertical_bar"></div>
      </div>
      <div className="bubble1"></div>
      <div className="bubble2"></div>
      <div className="bubble3"></div>
      <div className="bubble4"></div>
      <div className="bubble5"></div>
      <div className="bubble6"></div>
      <div className="bubble7"></div>
      <div className="bubble8"></div>
      <div className="introduction">
        <h1 className="hello">Hello!</h1>
        <p className={`moreIntro`}>
          I'm Zemelat, that wellcomes challenges and solutions.
        </p>
      </div>
      <div className="prof_img">
        <div className="circle"></div>
        <img src={Img} className="photo" alt="homepic" />
      </div>
    </div>
  );
}
export default Home;
