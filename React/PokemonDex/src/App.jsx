import { Route, Routes } from "react-router-dom";

import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="detail:id" element={<Detail />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
