import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DetailModal from "../components/modal/DetailModal";
import { FAVORITE } from "../store/pokemonSlice";
import FilterMenu from "../components/common/FilterMenu";
import PokemonList from "../components/pokemon/PokemonList";
import styled from "styled-components";
import useModal from "../hooks/useModal";
import useSort from "../hooks/useSort";

const Main = () => {
  const dispatch = useDispatch();
  // 리덕스 상태에서 pokemonData를 가져오기
  const pokemonsData = useSelector((state) => state.pokemon.pokemonData);
  // 필터링된 데이터 상태관리
  const [filteredPokemonData, setFilteredPokemonData] = useState(pokemonsData);

  //TODO: 태그 선택시
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

  //TODO: 정렬 selector 선택시
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

  //TODO: 찜목록에 추가/삭제
  const onClickLike = (id) => {
    const selectedPokemon = sortedData.find((pokemon) => pokemon.id === id);
    console.log("dd");
    // whishList에 업데이트
    if (sortedData.find((item) => item.id === id)) {
      dispatch(FAVORITE(selectedPokemon));
    }
  };

  //TODO: 모달
  const { isOpen, selectedData, openModal, closeModal } = useModal();

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
        <PokemonList
          pokemonsData={sortedData}
          onClickLike={onClickLike}
          onOpenModal={openModal}
        />
      </MainWrapper>

      {isOpen && (
        <DetailModal pokemon={selectedData} onCloseModal={closeModal} />
      )}
    </>
  );
};

export default Main;

const MainWrapper = styled.div`
  padding: 0 25px;
`;
