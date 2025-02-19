import PokeItem from "./PokeItem";
import React from "react";
import styled from "styled-components";

const PokeList = () => {
  return (
    <PokeListWrapper>
      <PokeItem />
      <PokeItem />
      <PokeItem />
      <PokeItem />
      <PokeItem />
      <PokeItem />
      <PokeItem />
      <PokeItem />
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
