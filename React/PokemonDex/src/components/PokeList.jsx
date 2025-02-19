import PokeItem from "./PokeItem";
import React from "react";
import styled from "styled-components";

const PokeList = ({ data }) => {
  return (
    <PokeListWrapper>
      {data.map((item) => (
        <PokeItem
          key={item.id}
          id={item.id}
          name={item.name}
          sprites={item.sprites.front_default}
          types={item.types}
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
