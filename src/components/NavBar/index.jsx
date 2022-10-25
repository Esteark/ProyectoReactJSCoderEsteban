import React from "react";
import CartWidget from "../CartWidtget/indexwidget";
import "./styles.css";

const NavBar = () => {
  return (
    <nav>
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <input type="checkbox" id="check" />
      <a href="index.html">
        <label className="logo">
          Chef <span>Burguer</span>
        </label>
      </a>
      <ul>
        <li>
          <a href="#" className="active">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">
            <CartWidget />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
