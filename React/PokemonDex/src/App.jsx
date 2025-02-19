import { Route, Routes } from "react-router-dom";

import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Search from "./pages/Search";

const pokeMockData = [
  {
    name: "bulbasaur",
    id: 1,
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  },
  {
    name: "charmander",
    id: 4,
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  },
  {
    name: "squirtle",
    id: 7,
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
  },
  {
    name: "pikachu",
    id: 25,
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
  },
  {
    name: "jigglypuff",
    id: 39,
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      },
      {
        slot: 2,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    },
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main data={pokeMockData} />}></Route>
          <Route path="detail:id" element={<Detail />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
