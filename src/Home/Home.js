import React from "react";
import "./Home.css";
import Logo from "./programmer.png";

const Home = () => (
  <div className="Home">
    <div className="left">
      <h2>Mojtaba Shahverdi</h2>
      <p>
        Front-end Developer with experience working with Startups with DLT
        Technologies for Tokenization Assets, Supply Chains, and STOs as a
        Blockchain Researcher. Analyst of Cryptocurrency Markets and on-chain
        Data.
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
