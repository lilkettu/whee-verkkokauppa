import React from "react";
import PropTypes from "prop-types";

const Hello = ({ text, changeText }) => {
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => changeText("Heippa")}>Change button</button>
    </div>
  )
}

Hello.propTypes = {
  text: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired
};

export default Hello;