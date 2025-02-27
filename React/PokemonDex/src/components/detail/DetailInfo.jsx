import PokemonType from "../pokemon/PokemonType";
import React from "react";
import styled from "styled-components";

const replaceSize = (size) => {
  return Number(size / 10);
};

const DetailInfo = ({
  description,
  frontImg,
  types,
  genus,
  height,
  weight,
  isLegendary,
}) => {
  const handleClickClose = (e) => {
    e.stopPropagation();
  };

  return (
    <DetailInfoWrapper onClick={handleClickClose}>
      <div className="pokemon-info img-box">
        <img src={frontImg} />
      </div>
      <div className="pokemon-info type">
        {types.map((item, index) => (
          <PokemonType key={index} name={item} />
        ))}
      </div>
      <div className="pokemon-info description">
        <p>{description}.</p>
      </div>
      <div className="pokemon-info detail">
        <span className="category">
          <p>키</p>
          <p>{replaceSize(height)} m</p>
        </span>
        <span className="category">
          <p>몸무게</p>
          <p>{replaceSize(weight)} kg</p>
        </span>
        <span className="category">
          <p>클래스</p>
          {isLegendary ? (
            <p className="class legendary">전설</p>
          ) : (
            <p className="class normal">일반</p>
          )}
        </span>
        <span className="category">
          <p>분류</p>
          <p>{genus}</p>
        </span>
      </div>
    </DetailInfoWrapper>
  );
};

export default DetailInfo;

const DetailInfoWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .pokemon-info {
    width: 100%;
    padding: 0 15px;
    margin-bottom: 23px;
    text-align: center;
  }
  .img-box {
    width: 60%;
    height: 250px;
    /* cursor: pointer; */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .description {
    width: 70%;
  }

  .detail {
    padding: 0 15px;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    .category {
      padding: 5px 10px;

      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;

      .class {
        /* padding: 5px 20px; */
        border-radius: 10px;
        font-size: 20px;
      }
      .legendary {
        background: linear-gradient(to right, red, yellow, green, blue, violet);
        -webkit-background-clip: text;
        color: transparent;
      }
    }

    .category p:first-child {
      color: #989898;
      margin-right: 8px;
    }
    .category p:last-child {
      font-size: 20px;
    }
  }
`;
