import React, { useState } from "react";
import "../styles/menu.css";

function Menu({ setopenmenu, openmenu }) {
    function hamClick()  {
     setopenmenu(true)
  };
   let close =()=>{
    setopenmenu(false)
   }

  return (
    <header className="menu">
      <i class="fa-solid fa-bars ham" onClick={hamClick} ></i>
      <div className="logo">
        <img
          src="https://t3.ftcdn.net/jpg/05/05/86/58/360_F_505865847_HAJ4BtMDxVYTKlveu5BDyljAym3ODnO8.jpg"
          alt=""
        />
        <h3>Dikshant</h3>
      </div>
      <nav className={openmenu ? "showMenu" : ""}>
        <ul>
          <i class="fa-solid fa-xmark cross" onClick={close}></i>
          <li>
            <a href="#home" onClick={()=>setopenmenu(false)}>Home</a>
          </li>
          <li>
            <a href="#work" onClick={()=>setopenmenu(false)}>Project</a>
          </li>
          <li>
            <a href="#experience" onClick={()=>setopenmenu(false)}>Experience</a>
          </li>
          <li>
            <a href="#testimonials" onClick={()=>setopenmenu(false)}>Testimonials</a>
          </li>
          <li>
            <a href="#contact" onClick={()=>setopenmenu(false)}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
