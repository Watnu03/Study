import { OrderEditor } from "./components/OrderEditor";

function App() {
  const handleOrderSubmit = ({ menu, address, request }) => {
    alert(
      `주문이 완려되었습니다!\n메뉴: ${menu}\n주소: ${address}\n요청사항: ${request}`
    );
  };

  return (
    <>
      <OrderEditor onSubmit={handleOrderSubmit} />
    </>
  );
}

export default App;
