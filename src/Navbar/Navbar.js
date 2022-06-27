import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="Navbar">
    <h2 className="Logo">
      MO<span>J</span>TABA
    </h2>
    <ul>
      <li>
        <Link to="/">
          <button>Home</button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button>About me</button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <button>Contact me</button>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
