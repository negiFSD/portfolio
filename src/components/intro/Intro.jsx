import React from "react";
import "./intro.css";
import dp from "../../img/dp.png";

function intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Sunil Negi</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Devloper</div>
              <div className="i-title-item">Engineer</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
          <div className="i-desc">Hello! Glad you visited my profile</div>
          <div className="i-desc">
            I love to desing and develop websites. Its fun to work with
            programming.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={dp} alt="profile-pictur" className="i-img" />
      </div>
    </div>
  );
}

export default intro;
