import PokemonItem from "./PokemonItem";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PokemonList = ({ onOpenModal }) => {
  // 리덕스 상태에서 pokemonData를 가져오기
  const pokemonsData = useSelector((state) => state.pokemon.pokemonData);
  return (
    <PokemonListWrapper>
      {pokemonsData.map((item) => (
        <PokemonItem
          key={item.id}
          id={item.id}
          name={item.name}
          frontImg={item.frontImg}
          types={item.types}
          onClickItem={() => onOpenModal(item.id)}
          color={item.color}
        />
      ))}
    </PokemonListWrapper>
  );
};

export default PokemonList;

const PokemonListWrapper = styled.div`
  width: 100%;
  padding: 30px 0;

  display: grid;
  gap: 15px;
  /*250px 이상일 때 한 줄에 최대한 많은 아이템을 배치 (화면 크기에 따라 자동 조정) */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  justify-content: center;
`;
