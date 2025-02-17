import React from "react";

const NumberButton = ({ text, onClick }) => {
  const buttonStyle = {
    height: 25,
    margin: "0 3px",
    padding: "5px 10px",
    lineHeight: "50%",
    borderRadius: 5,
    border: "1px solid #000",
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
  };
  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default NumberButton;
