import React from "react";
import "./Contact.css";
import { AiOutlineLine } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      {" "}
      <h1 className="aboutContact">
        <span>
          <AiOutlineLine className="lines" />
        </span>
        Contact
      </h1>
      <div id="contact" className="contact_container">
        <form className="form">
          <div className="nameEmail">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
          </div>

          <input
            type="text"
            className="comment"
            name="comment"
            placeholder="Any comment, suggestion, comment or question"
          />
          <div className="sendDiv">
            <button className="send_btn">Send</button>
          </div>
        </form>
        <div className="address">
          <div>
            Contact me via Email <address>zemelatmen@gmail.com</address>{" "}
          </div>
          {/* <a
            href="https://github.com/zemelatt?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a> */}
          {/* <a
            href="https://www.linkedin.com/in/zemelat-menber-a96088256?trk=contact-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
