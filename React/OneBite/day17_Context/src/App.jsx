/*TODO: day17-Context 적용하기
  [x]App 컴포넌트의 contacts State를 공급할 Context 객체를 하나 생성하세요
  [x]App 컴포넌트의 onCreateContact, onRemoveContact를 공급할 Context 객체를 하나 생성하세요
  [x]ContactEditor 컴포넌트가 Context 객체로부터 onCreateContact 함수를 공급받도록 수정하세요
  [x]ContactList 컴포넌트가 Context 객체로부터 contacts State를 공급받도록 수정하세요
      :이 컴포넌트에서 Props로 공급받던 onRemoveContact함수는 이제 더이상 필요하지 않습니다.
  [x]ContactItem 컴포넌트가 Context 객체로부터 onRemoveContact 함수를 공급받도록 수정하세요
*/

import "./App.css";

import { useCallback, useRef } from "react";
import { useMemo, useReducer } from "react";

import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { createContext } from "react";

/* 실제로 State의 값을 변경시키는 reducer 함수 */
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      /* 새로운 연락처 아이템을 배열 맨 앞에 추가 */
      return [action.data, ...state];
    case "REMOVE":
      /* action.targetId와 일치하는 연락처 아이템 제거 */
      return state.filter((it) => it.id !== action.targetId);
    default:
      /* action.type이 제대로 전달되지 않았을 때에는 State 변경 X */
      return state;
  }
};

export const stateContext = createContext();
export const dispatchContext = createContext();

function App() {
  /* App 전반에 사용될 연락처 데이터(배열) */
  const [contacts, dispatch] = useReducer(reducer, []);

  /* 새롭게 추가되는 아이템의 id를 위한 Reference 객체  */
  const idRef = useRef(0);

  /* 새로운 연락처를 추가하는 함수 - <ContactEditor/> 컴포넌트에서 호출될 예정 */
  const onCreateContact = useCallback(
    (name, contact) => {
      dispatch({
        type: "CREATE",
        data: {
          id: idRef.current++,
          name,
          contact,
        },
      });
    },
    [dispatch, idRef]
  );

  /* 기존 연락처를 삭제하는 함수 - <ContactItem/> 컴포넌트에서 호출될 예정 */
  const onRemoveContact = useCallback(
    (targetId) => {
      dispatch({
        type: "REMOVE",
        targetId,
      });
    },
    [dispatch]
  );

  // ✅ onCreateContact과 onRemoveContact을 포함한 객체를 useMemo로 한 번만 생성
  const memoizedDispatch = useMemo(() => {
    return { onCreateContact, onRemoveContact };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <stateContext.Provider value={contacts}>
        <dispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </dispatchContext.Provider>
      </stateContext.Provider>
    </div>
  );
}

export default App;
