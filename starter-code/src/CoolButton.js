import React, { Component } from "react";

function CoolButton(props) {
  return (
    <div className="buttons-container">
      <button className={props.className}>{props.value}</button>
    </div>
  );
}

export default CoolButton;
