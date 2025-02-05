import "./App.css";

import { useState } from "react";

// 환율 (1 USD = 1300 KRW)
const RATE = 1300;

const CurrencyInput = ({ name, currency, money, onExchange }) => {
  return (
    <div
      style={{
        width: "100%",
        margin: "3px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{name}:</p>
      <input
        type="number"
        name={name}
        /*NOTE: 동적 속성 접근
          money객체의 해당 속성(name)값인 money.krw 또는 money.usd 값을 가져옵니다
        */
        value={money[name]}
        onChange={onExchange}
        style={{
          width: "100%",
          paddingLeft: "0 3px",
          marginLeft: "5px",
          textAlign: "right",
        }}
      />
      <p
        style={{
          marginLeft: "5px",
          width: "50px",
        }}
      >
        {currency}
      </p>
    </div>
  );
};

function App() {
  const [money, setMoney] = useState({
    krw: "",
    usd: "",
  });

  const handleExchange = (e) => {
    /*NOTE: 구조분해 할당
    이벤트(e.target)이 발생한 요소의 name과 value 속성을 구조분해 할당으로
    각각 name과 value 변수로 추출하는 방식임
    */
    const { name, value } = e.target;

    /*NOTE: JAVASCRIPT 자동형변환
    보통 문자열을 계산할때 parseInt(),parseFloat()를 사용해서 숫자로 변형 후 계산을 진행하는데
    사용을 안해도 자동형변환으로 계산은 가능하다
    다만, 명시적으로 변환하는것이 더 명확하고 버그예방차원에서 좋다
    */
    if (name === "krw") {
      setMoney({
        krw: value,
        usd: parseFloat(value / RATE).toFixed(2),
      });
    } else if (name === "usd") {
      setMoney({
        krw: parseFloat(value * RATE).toFixed(2),
        usd: value,
      });
    } else {
      alert("올바르지 않은 접근입니다.");
    }
    /*NOTE: toFixed(n)
      toFixed(2): 소수점 둘째 자리까지 남기고 반올림
      toFixed(0): 소수점 제거, 정수로 변환하여 반올림
      toFixed()는 숫자를 string으로 반환해서 반환한다
    */
  };

  return (
    <div className="container">
      <h1>환율 변환기 (KRW-USD)</h1>
      <section>
        <CurrencyInput
          name={"krw"}
          currency={"원"}
          money={money}
          onExchange={handleExchange}
        />
        <CurrencyInput
          name={"usd"}
          currency={"달러"}
          money={money}
          onExchange={handleExchange}
        />
      </section>
    </div>
  );
}

export default App;
