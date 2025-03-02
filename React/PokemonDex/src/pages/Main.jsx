import React, { useEffect, useState } from "react";

import DetailModal from "../components/modal/DetailModal";
import FilterMenu from "../components/common/FilterMenu";
import PokemonList from "../components/pokemon/PokemonList";
import styled from "styled-components";
import { useSelector } from "react-redux";
import useSort from "../hooks/useSort";

const Main = () => {
  // 리덕스 상태에서 pokemonData를 가져오기
  const pokemonsData = useSelector((state) => state.pokemon.pokemonData);
  // 필터링된 데이터 상태관리
  const [filteredPokemonData, setFilteredPokemonData] = useState(pokemonsData);

  // 태그 검색저장 상태관리
  const [selectType, setSelectType] = useState([]);

  // 클릭된 태그 저장
  const onTypeTagClick = (name) => {
    setSelectType((prev) => {
      if (prev.includes(name)) {
        return prev.filter((el) => el !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  useEffect(() => {
    if (selectType.length === 0) {
      // selectType이 비어있으면 모든 포켓몬을 보여줍니다.
      setFilteredPokemonData(pokemonsData);
    } else {
      // 클릭된 태그 기반 필터링된 데이터 처리
      const filtered = pokemonsData.filter((pokemon) => {
        return pokemon.types.some((type) =>
          selectType.map((t) => t.toLowerCase()).includes(type)
        );
      });

      // 필터링된 데이터를 상태로 저장
      setFilteredPokemonData(filtered);
    }
  }, [selectType, pokemonsData]);

  // useSort 훅을 사용하여 초기 데이터와 정렬 함수 받기
  const [sortedData, sortData] = useSort(filteredPokemonData || pokemonsData);

  // 셀렉터에서 선택된 정렬 유형을 관리할 state
  const [selectedSortType, setSelectedSortType] = useState("lowest");

  // 셀렉터에서 정렬을 선택했을 때 호출되는 함수
  const handleSortChange = (e) => {
    const sortType = e.target.value;
    setSelectedSortType(sortType);
    sortData(sortType);
  };

  //모달
  const [closeModal, setCloseModal] = useState(false);
  const [selectPokemon, setSelectPokemon] = useState(null);

  const onOpenModal = (pokemonId) => {
    setSelectPokemon(pokemonId);
    setCloseModal(true);
    // body 스크롤 방지
    document.body.style.overflow = "hidden";
  };

  const onCloseModal = () => {
    setSelectPokemon(null);
    setCloseModal(false);
    // body 스크롤 방지
    document.body.style.overflow = "";
  };

  return (
    <>
      <MainWrapper>
        <FilterMenu
          pokemonsData={pokemonsData}
          onTypeTagClick={onTypeTagClick}
          selectType={selectType}
          handleSortChange={handleSortChange}
          selectedSortType={selectedSortType}
        />
        <PokemonList pokemonsData={sortedData} onOpenModal={onOpenModal} />
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
