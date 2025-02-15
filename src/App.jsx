import "./styles/global.css";

import { Route, Routes } from "react-router-dom";
import { createContext, useReducer, useRef } from "react";

import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

const itemData = [
  {
    id: 0,
    date: new Date("2025-01-15").getTime(),
    emotionId: 2,
    content: "0번일기",
  },
  {
    id: 1,
    date: new Date("2025-01-18").getTime(),
    emotionId: 5,
    content: "1번일기",
  },
  {
    id: 2,
    date: new Date("2025-02-18").getTime(),
    emotionId: 1,
    content:
      "2번일기다 이 AI자식드랑!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  },
  {
    id: 3,
    date: new Date("2025-03-11").getTime(),
    emotionId: 4,
    content: "3번일기",
  },
  {
    id: 4,
    date: new Date("2025-04-20").getTime(),
    emotionId: 3,
    content: "4번일기",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    case "SORT":
      return state.slice().sort((a, b) => {
        if (action.sortType === "latest") {
          return a.date - b.date;
        } else if (action.sortType === "oldest") {
          return b.date - a.date;
        } else {
          return 0;
        }
      });
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, itemData);
  const idRef = useRef(5);

  const onCreate = (date, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        date,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, date, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        date,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  /*NOTE: sort 함수로 정렬
    sort만 사용하면 원본배열을 직접 변경하게 되므로 상태가 변하지 않는 문제가 생길 수 있음
    그래서 sort하기전에 slice()로 배열을 먼저 복사해서 사용해야 안전함  
  */
  const onSort = (select) => {
    dispatch({
      type: "SORT",
      sortType: select,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{ onCreate, onUpdate, onDelete, onSort }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
