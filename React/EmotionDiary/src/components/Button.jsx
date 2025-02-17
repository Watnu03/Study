import React from "react";

const Button = ({ text, status, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${status ? `button-${status}` : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
