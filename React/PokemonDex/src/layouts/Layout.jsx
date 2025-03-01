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

const OutletWrapper = styled.div``;
