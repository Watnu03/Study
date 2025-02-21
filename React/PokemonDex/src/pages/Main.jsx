import FilterMenu from "../components/common/FilterMenu";
import PokeList from "../components/pokeComponents/PokeList";
import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainWrapper>
      <FilterMenu />
      <PokeList />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div``;
