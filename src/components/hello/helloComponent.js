import React from "react";
import propTypes from "prop-types";

const Hello = ({ text, changeText }) => {
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => changeText("Heippa")}>Change button</button>
    </div>
  )
}

Hello.propTypes = {
  text: propTypes.string.isRequired,
  changeText: propTypes.func.isRequired
};

export default Hello;