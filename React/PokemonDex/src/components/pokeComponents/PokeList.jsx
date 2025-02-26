import PokeItem from "./PokeItem";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PokeList = ({ onOpenModal }) => {
  // 리덕스 상태에서 pokemonData를 가져오기
  const pokemonsData = useSelector((state) => state.pokemon.pokemonData);

  return (
    <PokeListWrapper>
      {pokemonsData.map((item) => (
        <PokeItem
          key={item.id}
          id={item.id}
          name={item.name}
          frontImg={item.frontImg}
          types={item.types}
          onClickItem={() => onOpenModal(item.id)}
        />
      ))}
    </PokeListWrapper>
  );
};

export default PokeList;

const PokeListWrapper = styled.div`
  width: 100%;
  padding: 30px 0;

  display: grid;
  gap: 15px;
  /*250px 이상일 때 한 줄에 최대한 많은 아이템을 배치 (화면 크기에 따라 자동 조정) */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  justify-content: center;
`;
