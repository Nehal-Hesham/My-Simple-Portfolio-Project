import React from "react";
import "./style-prog.css";

function Progress(props) {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          {props.name}
        </span>
        <div
          className="progress progress-bar-striped"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow={props.progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${props.progress}%` }}
        >
          {props.progress}%
        </div>
      </div>
    </>
  );
}
export default Progress;
