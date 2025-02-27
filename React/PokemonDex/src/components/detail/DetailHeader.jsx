import { IoMdClose } from "react-icons/io";
import React from "react";
import replaceDexId from "../../util/replace-dex-id";
import styled from "styled-components";

const DetailHeader = ({ id, name, color, onCloseModal }) => {
  //부모이벤트 전달방지
  const handleChildClick = (e) => {
    e.stopPropagation();
  };
  // close 버튼 클릭 시 부모의 onClick 이벤트 전파 방지
  const handleClickClose = (e) => {
    e.stopPropagation();
    onCloseModal();
  };

  return (
    <DetailHeaderWrapper $bgColor={color} onClick={handleChildClick}>
      <span className="empty"></span>
      <div className="title">
        <p>{replaceDexId(id)}</p>
        <h3>{name}</h3>
      </div>
      <button className="closeButton">
        <IoMdClose onClick={handleClickClose} />
      </button>
    </DetailHeaderWrapper>
  );
};

export default DetailHeader;

const DetailHeaderWrapper = styled.div`
  width: 100%;
  padding: 15px 15px 5px 15px;
  border-radius: 15px 15px 0 0;
  /* color 값 받아서 background-color 로 넣기 */
  background-color: ${(props) =>
    props.$bgColor === "white" ? "#000" : props.$bgColor || "#000"};

  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    flex: 1;
    margin-left: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      max-width: 100px;
      padding: 5px 20px;
      border-radius: 20px;
      color: #2b2b2b;
      background-color: rgb(249, 249, 249, 0.9);
    }
    h3 {
      text-align: center;
      font-size: 25px;
      color: #fff;
      padding: 8px 0;
    }
  }

  .closeButton {
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background: none;
    font-size: 28px;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #494949;
    }
  }
`;
