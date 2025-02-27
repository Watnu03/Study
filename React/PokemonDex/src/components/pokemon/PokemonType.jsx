import React from "react";
import pokemonTypeData from "../../data/pokemon-type-data.json";
import styled from "styled-components";

const isSelected = true;

// 'name'과 일치하는 타입을 찾아서 name_kr과 color 반환
const getTypeDetails = (name) => {
  const type = pokemonTypeData.find(
    (type) => type.name.toLowerCase() === name.toLowerCase()
  );
  return type
    ? { name_kr: type.name_kr, color: type.color }
    : { name_kr: name, color: "#000" };
};

const PokemonType = ({ name }) => {
  const { name_kr, color } = getTypeDetails(name);

  return (
    <PokemonTypeItem
      color={color}
      className={`${isSelected ? "pokemonType_on" : ""} `}
    >
      <p>{name_kr}</p>
    </PokemonTypeItem>
  );
};

export default PokemonType;

const PokemonTypeItem = styled.button`
  position: relative;
  padding: 8px 25px;
  margin: 3px;
  border: 1px solid ${(props) => props.color};
  background-color: #fff;
  border-radius: 15px;
  font-size: 14px;
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

  &.pokemonType_on {
    color: #fff;
    border-color: ${(props) => props.color};
    background-color: ${(props) => props.color};
  }
  &.pokemonType_on:hover {
    color: #000;
    background-color: #f9f9f9;
    border: 1px solid ${(props) => props.color};
    transition: color 0.1s ease-in-out, border-color 0.1s ease-in-out,
      background-color 0.15s ease-in-out;
  }
`;
