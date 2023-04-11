import React, { useEffect } from "react";
import "../styles/experience.css";

function Experience() {

  useEffect(() => {
    const animation = {
     
    };
  }, []);
  return (
    <section id="experience">
      <div className="experience-container">
        <h1>Skills</h1>
        <div className="main-experience">
          <div className="time">
            <div>
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>javascript</li>
                <li>React</li>
              </ul>
            </div>
          </div>

          <div className="development">
            <div className="webapp">
              <div className="web">Web Development</div>
              <div className="tools">
                <h3>Tools</h3>
                <ul>
                  <li>Vs code</li>
                  <li>Git Hub</li>
                </ul>
              </div>
            </div>

            <div className="desktop">
              <h3>Backend</h3>
              <ul>
                <li>Node Js</li>
                <li>Express</li>
                <li>Mongodb</li>
                <li>Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
