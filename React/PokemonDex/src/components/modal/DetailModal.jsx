import DetailHeader from "../detail/DetailHeader";
import DetailInfo from "../detail/DetailInfo";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const DetailModal = ({ pokemon, onCloseModal }) => {
  const pokemonsData = useSelector((state) => state.pokemon.pokemonData);
  const pokemonData = pokemonsData.find((item) => item.id === pokemon);

  return (
    <DetailWrapper onClick={onCloseModal}>
      <ModalWrapper $borderColor={pokemonData.color}>
        <DetailHeader {...pokemonData} onCloseModal={onCloseModal} />
        <DetailInfo {...pokemonData} />
      </ModalWrapper>
    </DetailWrapper>
  );
};

export default DetailModal;

const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgb(249, 249, 249, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  width: 480px;
  min-height: 600px;
  max-height: 800px;
  outline: 2px solid
    ${(props) =>
      props.$borderColor === "white" ? "#000" : props.$borderColor || ""};
  border-radius: 18px;
  background-color: #fff;
  box-shadow: 0 0 10px 0.1px #e8e8e8;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
