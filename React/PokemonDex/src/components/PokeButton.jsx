import React from "react";
import styled from "styled-components";

const isAble = true;
const PokeButton = () => {
  return (
    <Button>
      {isAble ? (
        <img src="/assets/icon-able.png" className="button_able" />
      ) : (
        <img src="/assets/icon-disable.png" className="button_disable" />
      )}
    </Button>
  );
};

export default PokeButton;

const Button = styled.button`
  height: 35px;
  width: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;
  background: none;

  img {
    border-radius: 50%;
    height: 30px;
  }

  .button_able,
  .button_disable {
    &:hover {
      box-shadow: 0 0 2px 0.1px #e8e8e8;
      transform: scale(1.05);
      transition: transform 0.01s ease-in-out;
    }
  }
`;
