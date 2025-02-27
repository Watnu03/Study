import PokemonTag from "../pokemon/PokemonTag";
import React from "react";
import Selector from "./Selector";
import pokemonTypeData from "../../data/pokemon-type-data.json";
import styled from "styled-components";

const FilterMenu = () => {
  return (
    <FilterMenuWrapper>
      <section>
        <Selector />
        <Selector />
      </section>
      <section>
        {pokemonTypeData.map((item) => (
          <PokemonTag
            key={item.id}
            name={item.name}
            color={item.color}
            isSelected={true}
          />
        ))}
      </section>
    </FilterMenuWrapper>
  );
};

export default FilterMenu;

const FilterMenuWrapper = styled.div`
  width: 100%;
  section:first-child {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
