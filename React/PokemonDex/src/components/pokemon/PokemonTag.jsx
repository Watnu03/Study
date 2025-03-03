import React from "react";
import replaceTypeName from "../../util/replace-ko-type-name";
import styled from "styled-components";

const PokemonType = ({ name, isSelected, onTypeTagClick }) => {
  const { name_kr, color } = replaceTypeName(name);

  return (
    <PokemonTypeItem
      color={color}
      className={`${isSelected ? "pokemonType_on" : ""} `}
      onClick={onTypeTagClick}
    >
      <p>{name_kr}</p>
    </PokemonTypeItem>
  );
};

export default PokemonType;

const PokemonTypeItem = styled.button`
  position: relative;
  padding: 8px 20px;
  margin: 3px;
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
  font-size: 16px;
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
