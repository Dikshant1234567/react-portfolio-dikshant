import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="empty"></div>
      <div className="dev">
        <img
          src="https://t3.ftcdn.net/jpg/05/05/86/58/360_F_505865847_HAJ4BtMDxVYTKlveu5BDyljAym3ODnO8.jpg"
          alt=""
        />
        <h3>Dikshant Naudiyal</h3>
        <p>Fullstack || MERN Developer</p>
      </div>
      <div className="socialMedia">
        <h3>Social Media</h3>
        <span>
          <a target="_blank" href="https://github.com/Dikshant1234567">
            <i className="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/dikshantnaudiyal/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a target="_blank" href="https://dikshantnaudiyal06@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <p>dikshantnaudiyal06@gmail.com</p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
