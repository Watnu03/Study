import React from "react";
import replaceTypeName from "../../util/replace-ko-type-name";
import styled from "styled-components";

const isSelected = true;

const PokemonType = ({ name }) => {
  const { name_kr, color } = replaceTypeName(name);

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
  padding: 8px 20px;
  margin: 3px;
  border: 1px solid ${(props) => props.color};
  color: #fff;
  border-color: ${(props) => props.color};
  background-color: ${(props) => props.color};

  border-radius: 5px;
  font-size: 14px;
  overflow: hidden;
`;
