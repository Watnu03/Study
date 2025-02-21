import { IoSearchOutline } from "react-icons/io5";
import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <InputWrapper>
        <input type="text" placeholder="검색하실 포켓몬이름을 입력해주세요.." />
        <SearchButton />
      </InputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;

const SearchBarWrapper = styled.div`
  height: 60px;
  margin: 70px 0 10px 0;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 0 5px 0.1px #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 70%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 8px 40px 8px 10px;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 16px;
  }
`;

const SearchButton = styled(IoSearchOutline)`
  position: absolute;
  right: 10px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: black;
`;
