import React from "react";
import "./About.css";
import HtmlCssJSLogo from "./assets/HtmlCssJS.png";
import ReactLogo from "./assets/React.png";
import SassLogo from "./assets/Sass.png";
import BootStrapLogo from "./assets/BootStrap.png";
import ToBeContinuedLogo from "./assets/ToBeContinued.png";

const About = () => (
  <div className="About">
    <h3>
      i've Learned Html, Css, JavaScript, Sass, BootStrap and etc. and to be
      continued i'm Learning React now...
    </h3>
    <div className="images">
      <img src={HtmlCssJSLogo} />
      <img src={SassLogo} />
      <img src={BootStrapLogo} />
      <img src={ToBeContinuedLogo} />
      <img src={ReactLogo} />
    </div>
  </div>
);

export default About;
