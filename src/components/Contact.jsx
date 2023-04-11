import React, { useState } from "react";
import "../styles/contact.css";
import formhello from "../assets/helloform.webp";

function Contact() {
  const [Uname, setUname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const inputEventName = (e) => {
    setUname(e.target.value);
  };
  const inputEventEmail = (e) => {
    setemail(e.target.value);
  };
  const inputEventMessage = (e) => {
    setmessage(e.target.value);
  };

  const formSubmit = () => {
    const result = document.getElementsByClassName("formResponse")[0];
    if (Uname && email) {
      result.innerText = `You form is successfully submitted ${Uname}`;
      setUname("");
      setemail("");
      setmessage("");
    } else {
      result.innerText = `Please fill your information.`;
    }
  };

  return (
    <section id="contact">
      <div className="form">
        <h1>Contact us</h1>
        <input
          onChange={inputEventName}
          value={Uname}
          type="text"
          id="name"
          placeholder="Enter your name..."
        />
        <br />
        <input
          onChange={inputEventEmail}
          value={email}
          type="email"
          id="email"
          placeholder="Enter your Email..."
        />
        <br />
        <textarea
          onChange={inputEventMessage}
          value={message}
          placeholder="Enter your Message..."
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <p className="formResponse"></p>
        <button onClick={formSubmit}>Submit</button>
      </div>
      <div className="helloimg">
        <img src={formhello} alt="img" />
      </div>
    </section>
  );
}

export default Contact;
