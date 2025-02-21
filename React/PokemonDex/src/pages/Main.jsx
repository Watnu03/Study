import FilterMenu from "../components/FilterMenu";
import PokeList from "../components/PokeList";
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
