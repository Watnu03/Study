import FilterMenu from "../components/FilterMenu";
import PokeList from "../components/PokeList";
import React from "react";
import styled from "styled-components";

const Main = ({ data }) => {
  return (
    <MainWrapper>
      <FilterMenu />
      <PokeList data={data} />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div``;
