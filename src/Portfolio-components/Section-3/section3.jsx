import React from "react";
import "./style3.css";
import Progress from "./Progress/progress";

function Section3() {
  return (
    <>
      <div className="title">
        <h1>Skills</h1>
        <div className="d-flex">
          <div className="d-flex flex-column justify-content-center align-content-center flex-grow-1 m-3">
            <h2>My Focus</h2>
            <h4>UI/UX Design</h4>
            <h4>responsive Design</h4>
            <h4>Web Design</h4>
            <h4>Mobile app Design</h4>
          </div>
          <div className="d-flex flex-column justify-content-center align-content-center flex-grow-1">
            <Progress name="Css" progress="30" />
            <Progress name="Javascript" progress="40" />
            <Progress name="bootstrap" progress="35" />
            <Progress name="Jquery" progress="20" />
            <Progress name="Sass" progress="10" />
            <Progress name="React" progress="60" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
