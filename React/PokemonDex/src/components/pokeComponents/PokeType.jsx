import React from "react";
import pokeTypeData from "../../data/poke-type-data.json";
import styled from "styled-components";

const isSelected = true;

// 'name'과 일치하는 타입을 찾아서 name_kr과 color 반환
const getTypeDetails = (name) => {
  const type = pokeTypeData.find(
    (type) => type.name.toLowerCase() === name.toLowerCase()
  );
  return type
    ? { name_kr: type.name_kr, color: type.color }
    : { name_kr: name, color: "#000" };
};

const PokeType = ({ name }) => {
  const { name_kr, color } = getTypeDetails(name);

  return (
    <PokeTypeItem
      color={color}
      className={`${isSelected ? "pokeType_on" : ""} `}
    >
      <p>{name_kr}</p>
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
