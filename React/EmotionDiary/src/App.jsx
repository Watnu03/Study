import "./styles/global.css";

import { Route, Routes } from "react-router-dom";
import { createContext, useEffect, useReducer, useRef, useState } from "react";

import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

function reducer(state, action) {
  // 로컬스토리지
  let nextState;

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      nextState = [...state, action.data];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => item.id !== action.targetId);
      break;
    }
    case "SORT": {
      return state.slice().sort((a, b) => {
        if (action.sortType === "latest") {
          return a.date - b.date;
        } else if (action.sortType === "oldest") {
          return b.date - a.date;
        } else {
          return 0;
        }
      });
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));

  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    //parsedData가 배열인지 확인
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    // 저장되있는 id 값중 최대값 찾기위해
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) === maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

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

  if (isLoading) {
    return <div>로딩중...</div>;
  }

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
