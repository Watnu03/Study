import NumberButton from "./button/NumberButton";
import React from "react";

const Controller = ({ onUpdateCount }) => {
  const counterButtons = ["-1", "-10", "-100", "+100", "+10", "+1"];

  return (
    <section
      style={{
        height: "64px",
      }}
    >
      {counterButtons.map((num, index) => (
        <NumberButton
          key={index}
          text={num}
          onClick={() => onUpdateCount(parseInt(num))}
        />
      ))}
    </section>
  );
};

export default Controller;
