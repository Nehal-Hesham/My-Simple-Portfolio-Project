import React from "react";
import "./cards.css";

function Cards(props) {
  return (
    <>
      <div className="cards">{props.name}</div>
    </>
  );
}

export default Cards;
