import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonData: [],
    whishList: [],
  },
  reducers: {
    SET: (state, action) => {
      state.pokemonData = action.payload.map((el) => ({
        ...el,
        isFavorite: false,
      }));
    },
    // 찜목록 추가/삭제
    FAVORITE: (state, action) => {
      state.pokemonData = state.pokemonData.map((el) =>
        el.id === action.payload.id ? { ...el, isFavorite: !el.isFavorite } : el
      );
    },
  },
});

export const { SET, FAVORITE } = pokemonSlice.actions;
export default pokemonSlice.reducer;
