import React from "react";
import "./style4.css";
import Cards from "./Cards/cards";

function Section4(props) {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Portfolio</h1>
        </div>
        <div className="cards-container">
          <Cards name="Mobile Design" />
          <Cards name="Web Design" />
          <Cards name="Lood Design" />
          <Cards name="Web Application Development" />
          <Cards name="Mobile Application Development" />
          <Cards name="PWA Development" />
        </div>
      </div>
    </>
  );
}

export default Section4;
