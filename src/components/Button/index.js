import React from "react";
import "./styles.scss";

function Button({ text, color }) {
  return <button color={color}>{text}</button>;
}

export default Button;
