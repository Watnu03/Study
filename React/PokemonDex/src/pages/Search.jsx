import React, { useState } from "react";

import DetailModal from "../components/modal/DetailModal";
import PokemonList from "../components/pokemon/PokemonList";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchParams] = useSearchParams();
  // 쿼리 스트링에서 검색어 가져오기
  const searchQuery = searchParams.get("q") || "";

  // 리덕스 상태에서 pokemonData를 가져오기
  const pokemonsData = useSelector((el) => el.pokemon.pokemonData);

  // 검색어가 포함된 포켓몬 찾기
  const resultPokemon = pokemonsData.filter((el) =>
    // 검색어 포함 여부 체크
    el.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <SearchWrapper>
        <h3>" {searchQuery} "으로 검색 한 결과</h3>
        <PokemonList pokemonsData={resultPokemon} onOpenModal={onOpenModal} />
      </SearchWrapper>
      {closeModal && (
        <DetailModal pokemon={selectPokemon} onCloseModal={onCloseModal} />
      )}
    </>
  );
};

export default Search;

const SearchWrapper = styled.div`
  padding: 0 25px;
  h3 {
    padding-top: 20px;
    margin-left: 10px;
  }
`;
