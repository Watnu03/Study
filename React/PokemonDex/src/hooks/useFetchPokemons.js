import { SET } from "../store/pokemonSlice";
import { fetchPokemon } from "../api/api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useFetchPokemons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
          numberArray.map((el) => fetchPokemon(el))
        );

        // 포켓몬 데이터 리덕스에 저장
        dispatch(SET(pokemonsData)); // 데이터를 리덕스로 전달
      } catch (error) {
        console.error("fetch error:", error);
        throw error;
      }
    };

    fetchPokemonsData();
  }, [dispatch]);
};

export default useFetchPokemons;
