import PokemonItem from "./PokemonItem";
import React from "react";
import styled from "styled-components";

const PokemonList = ({ pokemonsData, onClickLike, onOpenModal }) => {
  return (
    <PokemonListWrapper>
      {pokemonsData.map((item) => (
        <PokemonItem
          key={item.id}
          id={item.id}
          name={item.name}
          frontImg={item.frontImg}
          types={item.types}
          color={item.color}
          isFavorite={item.isFavorite}
          onClickItem={() => onOpenModal(item.id)}
          onClickLike={() => onClickLike(item.id)}
        />
      ))}
      {pokemonsData.length === 0 && <p className="none">데이터가 없습니다.</p>}
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-items: start;

  .none {
    padding-top: 50px;
    text-align: center;
    color: #989898;
  }
`;
