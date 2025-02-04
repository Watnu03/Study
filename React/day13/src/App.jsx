import "./App.css";

import { useState } from "react";

const CurrenyInput = ({ name, money, onExchange, amount }) => {
  return (
    <div style={{ height: "25px", display: "flex", margin: "5px 0" }}>
      <p>{name}:</p>
      <input
        type="number"
        name={name}
        value={money[name]}
        onChange={onExchange}
        style={{
          width: "100%",
          paddingLeft: "3px",
          marginLeft: "5px",
          textAlign: "right",
        }}
      />
      <p style={{ width: 10, marginLeft: 5 }}>{amount}</p>
    </div>
  );
};

function App() {
  const [money, setMoney] = useState({
    krw: "",
    usd: "",
  });

  const handleExchange = (e) => {
    const { name, value } = e.target;
    const rate = 1300;

    if (name === "krw") {
      setMoney({
        krw: value,
        usd: (value / rate).toFixed(2),
      });
    } else if (name === "usd") {
      setMoney({
        krw: (value * rate).toFixed(2),
        usd: value,
      });
    }
  };

  return (
    <div className="container">
      <h1>환율 변환기 (KRW-USD)</h1>
      <section>
        <CurrenyInput
          name={"krw"}
          money={money}
          onExchange={handleExchange}
          amount={"₩"}
        />
        <CurrenyInput
          name={"usd"}
          money={money}
          onExchange={handleExchange}
          amount={"$"}
        />
      </section>
    </div>
  );
}

export default App;
