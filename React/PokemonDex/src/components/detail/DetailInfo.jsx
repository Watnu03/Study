import React, { useState } from "react";

import PokemonType from "../pokemon/PokemonType";
import styled from "styled-components";

const replaceSize = (size) => {
  return Number(size / 10);
};

const DetailInfo = ({
  description,
  frontImg,
  backImg,
  types,
  genus,
  height,
  weight,
  isLegendary,
}) => {
  const handleClickClose = (e) => {
    e.stopPropagation();
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <DetailInfoWrapper onClick={handleClickClose}>
      <div className="pokemon-info">
        <div
          className={`flip-card ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={frontImg} alt="Front" />
            </div>
            <div className="flip-card-back">
              <img src={backImg} alt="Back" />
            </div>
          </div>
        </div>
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
    margin-bottom: 18px;
    text-align: center;
    perspective: 1000px; //3d 효과 영역설정

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flip-card {
    width: 60%;
    height: 300px;
    perspective: 1000px;
    cursor: pointer;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(15deg); //호버시 살짝 회전
  }

  .flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg); //클릭시 180도 회전(뒤짚기)
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; //뒷면 숨기기
  }

  .flip-card-front img,
  .flip-card-back img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .flip-card-back {
    transform: rotateY(180deg); //뒷면 이미지를 미리 180도 회전시켜놓기
  }

  .type {
    width: 80%;
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

      p:first-child {
        color: #989898;
        margin-right: 8px;
      }
      p:last-child {
        font-size: 20px;
      }
    }
  }
`;
