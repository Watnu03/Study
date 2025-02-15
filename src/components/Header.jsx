import Button from "./Button";
import React from "react";

const Header = ({
  left,
  leftStatus,
  onClickLeft,
  title,
  right,
  rightStatus,
  onClickRight,
}) => {
  return (
    <div className="header">
      <div className="header_left">
        <Button text={left} status={leftStatus} onClick={onClickLeft} />
      </div>
      <div className="header_center">{title}</div>
      {right ? (
        <div className="header_right">
          <Button text={right} status={rightStatus} onClick={onClickRight} />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
