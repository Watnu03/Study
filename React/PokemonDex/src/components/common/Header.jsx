import { Link } from "react-router-dom";
import PokeButton from "../button/PokeButton";
import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div className="empty"></div>
        <Link to={"/"} className="logo">
          <img src="/assets/poke-logo.png" />
        </Link>
        <PokeButton />
      </HeaderWrapper>
      <SearchBar />
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 50;

  width: 100%;
  height: 70px;
  padding: 0 20px;
  background-color: #35363a;
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    cursor: pointer;
  }
  .logo > img {
    height: 50px;
  }
`;
