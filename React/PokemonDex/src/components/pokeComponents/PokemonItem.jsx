import React, { useEffect, useState } from "react";

import PokemonButton from "../button/PokemonButton";
import PokemonType from "./PokemonType";
import replaceDexId from "../../util/replace-dex-id";
import styled from "styled-components";

const PokemonItem = ({ id, name, frontImg, types, onClickItem, color }) => {
  return (
    <PokemonItemWrapper onClick={onClickItem} $bgColor={color}>
      <div className="info">
        <span className="empty"></span>
        <span>
          <p>{replaceDexId(id)}</p>
          <h5>{name}</h5>
        </span>
        <span>
          <PokemonButton />
        </span>
      </div>
      <div className="img">
        <img src={frontImg} />
      </div>
      <div className="typeTag ">
        {types.map((item, index) => (
          <PokemonType key={index} name={item} />
        ))}
      </div>
    </PokemonItemWrapper>
  );
};

export default PokemonItem;

const PokemonItemWrapper = styled.div`
  max-width: 320px;
  min-height: 335px;

  padding: 18px 20px;
  border: 1px solid #e8e8e8;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 8px 0.1px #e8e8e8;
    transform: translateY(-3px);
    transition: transform 0.3s ease-in-out;
  }

  .info {
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
    }
    span:first-child {
      width: 25%;
      text-align: left;
      justify-content: flex-start;
    }
    span:nth-child(2) {
      width: 50%;
      flex-direction: column;
    }
    span:last-child {
      width: 25%;
      justify-content: flex-end;
    }

    p {
      max-width: 100px;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 14px;
      color: #fff;
      background-color: ${(props) =>
        props.$bgColor === "white" ? "#000" : props.$bgColor || "#000"};
      opacity: 0.8;
    }
    h5 {
      font-size: 20px;
    }
  }

  .img {
    width: 100%;
    height: 230px;
    text-align: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &:hover img {
      transform: scale(1.03);
      transition: transform 0.3s ease-in-out;
    }
  }

  .typeTag {
  }
`;
