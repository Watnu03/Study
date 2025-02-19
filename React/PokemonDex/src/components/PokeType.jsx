import React from "react";
import styled from "styled-components";

const PokeType = ({ name, color, isSelected }) => {
  return (
    <PokeTypeItem
      color={color}
      className={`${isSelected ? "pokeType_on" : ""} `}
    >
      <p>{name}</p>
    </PokeTypeItem>
  );
};

export default PokeType;

const PokeTypeItem = styled.button`
  position: relative;
  padding: 6px 23px;
  margin: 3px;
  border: 1px solid ${(props) => props.color};
  background-color: #fff;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  background-color: #f9f9f9;
  transition: color 0.1s ease-in-out, border-color 0.1s ease-in-out,
    background-color 0.15s ease-in-out;

  &:hover {
    color: #fff;
    border-color: ${(props) => props.color};
    background-color: ${(props) => props.color};
  }

  &.pokeType_on {
    color: #fff;
    border-color: ${(props) => props.color};
    background-color: ${(props) => props.color};
  }
  &.pokeType_on:hover {
    color: #000;
    background-color: #f9f9f9;
    border: 1px solid ${(props) => props.color};
    transition: color 0.1s ease-in-out, border-color 0.1s ease-in-out,
      background-color 0.15s ease-in-out;
  }
`;
