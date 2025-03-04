import React from "react";
import styled from "styled-components";

const LoadingPage = () => {
  return (
    <LoadingWrapper>
      <img src="/assets/icon-able.png"></img>
      <img src="/assets/icon-able.png"></img>
      <img src="/assets/icon-able.png"></img>
    </LoadingWrapper>
  );
};

export default LoadingPage;

const LoadingWrapper = styled.div`
  height: 100vh;
  background-color: rgb(249, 249, 249, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1001;

  img {
    margin: 0 5px;
    width: 23px;
  }

  @keyframes bounce1 {
    0%,
    33% {
      transform: translateY(0);
    }
    16% {
      transform: translateY(-20px);
    }
  }

  @keyframes bounce2 {
    33%,
    66% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes bounce3 {
    66%,
    100% {
      transform: translateY(0);
    }
    83% {
      transform: translateY(-20px);
    }
  }

  img:first-child {
    animation: bounce1 2s ease-in-out infinite;
  }

  img:nth-child(2) {
    animation: bounce2 2s ease-in-out infinite;
  }

  img:last-child {
    animation: bounce3 2s ease-in-out infinite;
  }
`;
