import React, { useState } from "react";

import DetailModal from "../components/modal/DetailModal";
import FilterMenu from "../components/common/FilterMenu";
import PokemonList from "../components/pokemon/PokemonList";
import SearchBar from "../components/common/SearchBar";
import styled from "styled-components";

const Main = () => {
  const [closeModal, setCloseModal] = useState(false);
  const [selectPokemon, setSelectPokemon] = useState(null);

  const onOpenModal = (pokemonId) => {
    setSelectPokemon(pokemonId);
    setCloseModal(true);
  };

  const onCloseModal = () => {
    setSelectPokemon(null);
    setCloseModal(false);
  };

  return (
    <>
      <div>
        <SearchBar />
        <MainWrapper>
          <FilterMenu />
          <PokemonList onOpenModal={onOpenModal} />
        </MainWrapper>
      </div>
      {closeModal && (
        <DetailModal pokemon={selectPokemon} onCloseModal={onCloseModal} />
      )}
    </>
  );
};

export default Main;

const MainWrapper = styled.div`
  padding: 0 25px;
`;
