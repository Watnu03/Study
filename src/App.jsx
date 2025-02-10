import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";

import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Header from "./components/Header";
import Home from "./pages/Home";
import New from "./pages/New";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
}

export default App;
