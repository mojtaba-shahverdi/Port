import React from "react";
import "./Home.css";
import Logo from "./programmer.png";

const Home = () => (
  <div className="Home">
    <div className="left">
      <h2>Navid Mohebi</h2>
      <p>
       lorem ipsum d lorem ipsum dolor sit amet, consectetur adip
      </p>
    </div>
    <div className="dots">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div className="right">
      <img src={Logo} />
    </div>
  </div>
);

export default Home;
