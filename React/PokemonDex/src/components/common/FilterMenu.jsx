import PokeType from "../pokeComponents/PokeType";
import React from "react";
import Selector from "./Selector";
import pokeTypeData from "../../data/poke-type-data.json";
import styled from "styled-components";

const FilterMenu = () => {
  return (
    <FilterMenuWrapper>
      <section>
        <Selector />
        <Selector />
      </section>
      <section>
        {pokeTypeData.map((item) => (
          <PokeType
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
