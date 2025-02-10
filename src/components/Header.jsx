import Button from "./DefaultButton";
import React from "react";

const Header = () => {
  return (
    <div>
      <Button value={"<"} />
      <span>2025년 2월</span>
      <Button value={">"} />
    </div>
  );
};

export default Header;
