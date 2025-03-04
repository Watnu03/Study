import { useDispatch, useSelector } from "react-redux";

import DetailModal from "../components/modal/DetailModal";
import { FAVORITE } from "../store/pokemonSlice";
import PokemonList from "../components/pokemon/PokemonList";
import React from "react";
import styled from "styled-components";
import useModal from "../hooks/useModal";

const Favorite = () => {
  const dispatch = useDispatch();
  const pokemonsData = useSelector((state) => state.pokemon.pokemonData);
  const filteredData = pokemonsData.filter(
    (pokemon) => pokemon.isFavorite === true
  );

  //TODO: 찜목록에 추가/삭제
  const onClickLike = (id) => {
    const selectedPokemon = pokemonsData.find((pokemon) => pokemon.id === id);
    if (pokemonsData.find((pokemon) => pokemon.id === id)) {
      dispatch(FAVORITE(selectedPokemon));
    }
  };

  //TODO: 모달
  const { isOpen, selectedData, openModal, closeModal } = useModal();

  return (
    <FavoriteWrapper>
      <h3>찜목록</h3>
      <PokemonList
        pokemonsData={filteredData}
        onClickLike={onClickLike}
        onOpenModal={openModal}
      />

      {isOpen && (
        <DetailModal pokemon={selectedData} onCloseModal={closeModal} />
      )}
    </FavoriteWrapper>
  );
};

export default Favorite;

const FavoriteWrapper = styled.div`
  padding: 0 25px;

  h3 {
    padding-top: 20px;
    padding-left: 5px;
  }
`;
