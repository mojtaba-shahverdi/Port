import React from "react";
import "./About.css";
import HtmlCssJSLogo from "./assets/HtmlCssJS.png";
import ReactLogo from "./assets/React.png";
import SassLogo from "./assets/Sass.png";
import BootStrapLogo from "./assets/BootStrap.png";
import ToBeContinuedLogo from "./assets/ToBeContinued.png";

const About = () => {

  return (
  <div className="About">
    <h3>
      i've Learned Html, Css, JavaScript, Sass, BootStrap and etc. and to be
      continued i'm Learning React now...
    </h3>
    <div className="images">
      <img src={HtmlCssJSLogo} alt="html"/>
      <img src={SassLogo} alt="react"/>
      <img src={BootStrapLogo} alt="react"/>
      <img src={ToBeContinuedLogo}alt="react" />
      <img src={ReactLogo} alt="react"/>
    </div>
  </div>
  )
};



export default About;
