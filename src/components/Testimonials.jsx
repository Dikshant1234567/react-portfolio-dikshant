import React from "react";
import "../styles/testimonials.css";
import profile from "../assets/testimonialProfile.webp";

function Testimonials() {
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials">
        <div className="testimonials-container">

          <div className="person" >
            <img src={profile} alt="" />
            <div>
              <h3>Person1</h3>
              <p>
                Hey i am person1. <br />
                <span>Hire him.</span>
              </p>
            </div>
          </div>

        
            <div className="person">
              <img src={profile} alt="" />
              <div>
                <h3>Person2</h3>
                <p>
                  Hey i am person2. <br />
                  <span>Hire him.</span>
                </p>
              </div>
            </div>
          

          
            <div className="person">
              <img src={profile} alt="" />
              <div>
                <h3>Person3</h3>
                <p>
                  Hey i am person3. <br />
                  <span>Hire him.</span>
                </p>
              </div>
            </div>
         

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
