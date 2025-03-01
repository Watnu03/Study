import React, { useState } from "react";

import DetailModal from "../components/modal/DetailModal";
import FilterMenu from "../components/common/FilterMenu";
import PokemonList from "../components/pokemon/PokemonList";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Main = () => {
  // 리덕스 상태에서 pokemonData를 가져오기
  const pokemonsData = useSelector((state) => state.pokemon.pokemonData);

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
      <MainWrapper>
        <FilterMenu />
        <PokemonList pokemonsData={pokemonsData} onOpenModal={onOpenModal} />
      </MainWrapper>

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
