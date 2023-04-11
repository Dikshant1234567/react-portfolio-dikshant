import React from "react";
import "../styles/work.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Img1 from "../assets/project1.avif";
import Img2 from "../assets/project2.avif";
import Img3 from "../assets/project3.avif";
import MovieIMG from "../assets/logo.avif"

function Work() {
  return (
    <section id="work">
      <h1>Project</h1>
      <div className="carsouel">
          <div className="slide">
            <img src='https://images.news18.com/ibnlive/uploads/2019/10/WhatsApp.jpg?impolicy=website&width=510&height=356' alt="" />
            <div>
              <h2>WhatsApp Clone</h2>
              <p>
               You can enjoy realtime chat with your friends and check the online/offline status and also check all the old message after the page refresh.
              </p>
              <h4 className="app-type">FullStack MERN Project</h4>
              <button> <a href="https://whatsapp-clone-dikshant.netlify.app/" target="_blank">Click me</a></button>
            </div>
          </div>
          <div className="slide">
            <img src='https://img.freepik.com/free-photo/human-face-with-unity-design-3d-rendered-illustration_460848-11275.jpg?size=626&ext=jpg&uid=R80051347&ga=GA1.1.279784070.1673068729&semt=sph' alt="" />
            <div>
              <h2>File-sharing App</h2>
              <p>
               An application where you can upload a images and get a link, so you can easily sharing the images and download it easily.
              </p>
              <h4 className="app-type">FullStack MERN Project</h4>
              <button><a href="https://file-sharing-dikshant.netlify.app/" target="_blank"> Click me</a></button>
            </div>
          </div>
          <div className="slide">
            <img src={MovieIMG} alt="" />
            <div>
              <h2>Movie app</h2>
              <p>
               A movie app where you can search for any movie and check the info of the Searched movie.
              </p>
              <h4 className="app-type">Frontend Project</h4>
              <button> <a href="https://movie-app-dikshant.netlify.app" target="_blank">Click me</a></button>
              
            </div>
          </div>
          <div className="slide">
            <img src={Img3} alt="" />
            <div>
              <h2>Login/sinup pages </h2>
              <p>
               A complete Login/sinup  where you can login/sinup.
              </p>
              <h4 className="app-type">FullStack MERN Project</h4>
              <button><a href="https://login-sinup-dikshantpersonal.netlify.app" target="_blank">Click me</a></button>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Work;
