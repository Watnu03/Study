import { useState } from "react";

export const OrderEditor = ({ onSubmit }) => {
  const [menu, setMenu] = useState("족발");
  const [address, setAddress] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = () => {
    onSubmit({ menu, address, request });

    setMenu("족발");
    setAddress("");
    setRequest("");
  };

  return (
    <div
      style={{
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          style={{ width: 300, padding: 5 }}
          value={menu}
          onChange={(e) => {
            setMenu(e.target.value);
          }}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          value={request}
          onChange={(e) => {
            setRequest(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};
