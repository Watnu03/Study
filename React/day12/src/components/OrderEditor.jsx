import { useRef, useState } from "react";

// 초기화용
// 리렌더링할때마다 재생성되면 최적화에 안좋아서 외부로 빼둠
const initialOrder = {
  menu: "",
  address: "",
  request: "",
};

const OrderEditor = () => {
  const addressRef = useRef(null);
  const requestRef = useRef(null);

  const [order, setOrder] = useState({
    menu: "",
    address: "",
    request: "",
  });

  const onChangeOrder = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (order.address === "") {
      addressRef.current.focus();
    } else if (order.request === "") {
      requestRef.current.focus();
    } else {
      alert(
        `주문이 완료되었습니다 메뉴 : ${order.menu}\n 주소 : ${order.address}\n 요청사항: ${order.request}`
      );

      setOrder(initialOrder);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달 음식 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          name="menu"
          value={order.menu}
          onChange={onChangeOrder}
          style={{ width: 300, padding: 5 }}
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
          name="address"
          value={order.address}
          onChange={onChangeOrder}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          ref={addressRef}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          name="request"
          value={order.request}
          onChange={onChangeOrder}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          ref={requestRef}
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
