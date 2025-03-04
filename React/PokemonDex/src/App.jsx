import { Route, Routes } from "react-router-dom";

import Favorite from "./pages/Favorite";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Search from "./pages/Search";
import useFetchPokemons from "./hooks/useFetchPokemons";

function App() {
  // api fetch해서 불러오기
  useFetchPokemons();

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
