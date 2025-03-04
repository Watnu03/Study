import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const nav = useNavigate();

  return (
    <NotFoundWrapper>
      <div className="title">
        <h1>4</h1>
        <div className="img-box">
          <img src="/error.gif"></img>
        </div>
        <h1>4</h1>
      </div>
      <div className="description">
        <h2>페이지를 찾을 수 없습니다</h2>
        <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지 입니다.</p>
        <button onClick={() => nav("/")}>메인페이지로 돌아가기</button>
      </div>
    </NotFoundWrapper>
  );
};

export default ErrorPage;

const NotFoundWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 150px;
      color: #e44e4e;
    }
    .img-box {
      width: 150px;
      height: 150px;
      margin: 0 30px 0 0;
      border: 25px solid #e44e4e;
      border-radius: 50%;
      object-fit: cover;
      overflow: hidden;

      img {
        width: 120%;
      }
    }
  }

  .description {
    text-align: center;
    h2 {
      padding-top: 10px;
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      padding: 10px 0;
      color: #797979;
    }
    button {
      outline: none;
      border: none;
      border-radius: 15px;
      background-color: #e44e4e;
      color: #fff;
      cursor: pointer;
      padding: 8px 15px;
      margin: 10px 0;

      &:hover {
        background-color: #bc4d4d;
      }
    }
  }
`;
