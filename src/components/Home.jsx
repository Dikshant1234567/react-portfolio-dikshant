import React from "react";
import "../styles/home.css";
import profile from "../assets/mainImg.jpg";
import cv from "../assets/FullStack Developer Dikshant Resume.pdf"

function Home() {
  const click= ()=>{
    window.location = "#work"
  }

  return (
    <section id="home">
      <div className="dev_description">
        <h1>
         Hello!
        </h1>
        <h3>I'am Dikshant Naudiyal.</h3>
        <br />
       <p>A Student & Frontend Developer.</p>
        <div className="button">
          <button onClick={click}>Know more</button>
        </div>
      </div>
      <div className="img">
        <div>
          <img src={profile} alt="developer-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
