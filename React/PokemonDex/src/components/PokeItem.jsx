import React, { useEffect, useState } from "react";

import PokeButton from "./PokeButton";
import PokeType from "./PokeType";
import styled from "styled-components";

// id 자리수에 따라 앞에 0붙이기
const handleUpdateId = (id) => {
  let formattedId = id;
  if (id < 10) {
    formattedId = `00${id}`;
  } else if (id >= 10 && id < 100) {
    formattedId = `0${id}`;
  }

  return formattedId;
};

const PokeItem = ({ id, name, sprites, types }) => {
  const remakeId = handleUpdateId(id);

  return (
    <PokeItemWrapper>
      <div className="info">
        <span className="empty"></span>
        <span>
          <h5>No.{remakeId}</h5>
          <p>{name}</p>
        </span>
        <span>
          <PokeButton />
        </span>
      </div>
      <div className="img">
        <img src={sprites} />
      </div>
      <div className="typeTag ">
        {types.map((item, index) => (
          <PokeType key={index} name={item} />
        ))}
      </div>
    </PokeItemWrapper>
  );
};

export default PokeItem;

const PokeItemWrapper = styled.div`
  max-width: 320px;
  min-height: 400px;

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
  }

  .info > span {
    display: flex;
  }

  .info > span:first-child {
    width: 25%;
    text-align: left;
    justify-content: flex-start;
  }
  .info > span:last-child {
    width: 25%;
    justify-content: flex-end;
  }
  .info > span:nth-child(2) {
    width: 50%;
    flex-direction: column;
  }
  .info > span > h5 {
    font-size: 20px;
    font-weight: bold;
  }

  .img {
    width: 100%;
    height: 200px;
    text-align: center;
  }
  .img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &:hover .img img {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
  }

  .typeTag {
  }
`;
