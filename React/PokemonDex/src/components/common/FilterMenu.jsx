import PokemonTag from "../pokemon/PokemonTag";
import React from "react";
import Selector from "./Selector";
import pokemonTypeData from "../../data/pokemon-type-data.json";
import styled from "styled-components";

const basicSelectItem = [
  { id: 1, name: "도감 낮은 번호순서", value: "lowest" },
  { id: 2, name: "도감 높은 번호순서", value: "highest" },
  { id: 3, name: "이름 순서(A-Z)", value: "az" },
  { id: 4, name: "이름 반대순서(Z-A)", value: "za" },
];
const etcSelectItem = [
  { id: 1, name: "무거운 순서", value: "heavy" },
  { id: 2, name: "가벼운 순서", value: "light" },
  { id: 3, name: "키가 큰 순서", value: "tall" },
  { id: 4, name: "키가 작은 순서", value: "short" },
];

const FilterMenu = () => {
  return (
    <FilterMenuWrapper>
      <section className="selectorSection">
        <Selector topic={"기타정렬"} options={etcSelectItem} />
        <Selector topic={"정렬"} options={basicSelectItem} />
      </section>
      <section className="typeSection">
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .selectorSection {
    width: 100%;
    display: flex;
  }

  .typeSection {
    display: flex;
    flex-wrap: wrap;
  }
`;
