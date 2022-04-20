import React from "react";
import "./about.css";

import abt1 from "../../img/abt1.jpg";
function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={abt1} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          dolore mollitia dolores!
        </p> */}
        <p className="a-desc">
          I have worked with Vertiv and having experience of Six years where I
          was part of electrical engineering team. While working I started
          learning coding in curiosity which I found interesting and enjoyed a
          lot. Now due to prominent scope and my keen interest in coding I
          decided to move into this field.
        </p>
      </div>
    </div>
  );
}

export default About;
