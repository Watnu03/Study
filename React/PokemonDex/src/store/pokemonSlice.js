import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonData: [],
  },
  reducers: {
    SET: (state, action) => {
      state.pokemonData = action.payload;
    },
  },
});

export const { SET } = pokemonSlice.actions;
export default pokemonSlice.reducer;
