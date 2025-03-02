import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

export default Layout;

const OutletWrapper = styled.div`
  height: calc(100vh - 140px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 13px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff6347;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;
