import React, { useState } from "react";

import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const nav = useNavigate();
  /*NOTE: searchParams.get("q") =>URL에 있는 쿼리스트링중 q 값 가져옴
    URL이 /search?q=Pokemon이면 searchParams.get("q")는 Pokemon을 반환
  */
  const [query, setQuery] = useState("");

  const handleChangeSearch = (e) => {
    // 사용자가 입력하는 검색어를 상태에 저장
    setQuery(e.target.value);
  };
  //  Enter 키 입력시
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      nav(`/search?q=${query}`);
    }
  };

  // 검색버튼 클릭시
  const handleClickSearch = () => {
    nav(`/search?q=${query}`);
  };

  return (
    <SearchBarWrapper>
      <InputWrapper>
        <input
          type="text"
          placeholder="검색하실 포켓몬이름을 입력해주세요.."
          value={query}
          onChange={handleChangeSearch}
          onKeyDown={handleEnterSearch}
        />
        <SearchButton onClick={handleClickSearch} />
      </InputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin: 70px 0 10px 0;
  padding: 15px 20px;
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
    padding: 10px 40px 10px 10px;
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
