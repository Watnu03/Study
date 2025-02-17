/*TODO: day16-연락처 앱 만들기
  [x]필수) 새로운 연락처를 등록할 수 있습니다.
  [x]필수) 등록된 연락처는 Contact List에 리스트 형태로 렌더링 됩니다.
  [x]필수) 등록된 연락처를 삭제할 수 있습니다.
  [x]선택) 새로운 연락처를 추가하는 ContactEditor 컴포넌트에서 빈 입력을 방지하세요
  [x]선택) 연락처 리스트를 저장할 때 useState대신 useReducer를 활용하세요
*/

import "./App.css";

import { useReducer, useRef } from "react";

import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockData = [
  { id: 0, name: "Alice", email: "alice@example.com" },
  { id: 1, name: "Bob", email: "bob@example.com" },
  { id: 2, name: "Charlie", email: "charlie@example.com" },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
  }
}

function App() {
  const idRef = useRef(3);
  const [contacts, dispatch] = useReducer(reducer, mockData);

  const onCreate = (name, email) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: name,
        email: email,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
