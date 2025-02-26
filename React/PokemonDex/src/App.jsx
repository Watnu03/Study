import { Route, Routes } from "react-router-dom";

import Favorite from "./pages/Favorite";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import { SET } from "./store/pokemonSlice";
import Search from "./pages/Search";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  // 리덕스 데이터 불러오기
  const dispatch = useDispatch();

  // API 불러오기
  useEffect(() => {
    const fetchData = async (pokemonId) => {
      try {
        // 포켓몬의 종에 대한 상세정보
        const responsePokemonSpecies = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );
        const pokemonSpeciesData = await responsePokemonSpecies.json();

        //포켓몬에 대한 상세정보(Type)
        const responsePokemonInfo = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        const pokemonInfoData = await responsePokemonInfo.json();

        //Pokemon 데이터
        const pokemonData = {
          id: pokemonId,
          name: pokemonSpeciesData.names.find(
            (item) => item.language.name === "ko"
          ).name,
          genus: pokemonSpeciesData.genera.find(
            (item) => item.language.name === "ko"
          ).genus,
          color: pokemonSpeciesData.color.name,
          description: pokemonSpeciesData.flavor_text_entries.find(
            (item) => item.language.name === "ko"
          ).flavor_text,
          isLegendary: pokemonSpeciesData.is_legendary,
          frontImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          backImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
          types: pokemonInfoData.types.map((item) => item.type.name),
          height: pokemonInfoData.height,
          weight: pokemonInfoData.weight,
        };

        return pokemonData;
      } catch (error) {
        console.error("fetch error:", error);
        return;
      }
    };

    /*NOTE: Array로 151개 빈배열 만들기
      Array.from 로 길이가 151인 배열을 만들기
      (_, i) _는 첫번째 값(현재값)은 받지만 사용하지않겠다는뜻
        두번째값 i는 인덱스 값 다음 i+1 값을 받음     
      =>0~151까지 index를 받겠다
    */
    const numberArray = Array.from({ length: 151 }, (_, i) => {
      return i + 1;
    });

    // 포켓몬 데이터 설정
    const fetchPokemonsData = async () => {
      try {
        // Promise.all로 모든 Promise가 해결된 후에 데이터를 받기
        const pokemonsData = await Promise.all(
          numberArray.map((el) => fetchData(el))
        );

        // 포켓몬 데이터 리덕스에 저장
        dispatch(SET(pokemonsData)); // 데이터를 리덕스로 전달
      } catch (error) {
        console.error("fetch error:", error);
      }
    };

    fetchPokemonsData();
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
