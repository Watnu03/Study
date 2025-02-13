import Button from "./Button";
import React from "react";

const Header = ({ left, leftStatus, title, right, rightStatus }) => {
  return (
    <div className="header">
      <div className="header_left">
        <Button text={left} status={leftStatus} />
      </div>
      <div className="header_center">{title}</div>
      {right ? (
        <div className="header_right">
          <Button text={right} status={rightStatus} />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
