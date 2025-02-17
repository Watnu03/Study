import "./App.css";

import { useReducer, useRef } from "react";

import Editor from "./components/editor";
import Header from "./components/header";
import TodoList from "./components/todoList";

const mockTodos = [
  { id: 0, content: "할 일 0", date: new Date().getTime(), isDone: true },
  { id: 1, content: "할 일 1", date: new Date().getTime(), isDone: false },
  { id: 2, content: "할 일 2", date: new Date().getTime(), isDone: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const idRef = useRef(3);
  const [todos, dispatch] = useReducer(reducer, mockTodos);

  //새로운 todo 생성
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        //idRef를 이용해서 중복되지않게 id 생성
        id: idRef.current++,
        content: content,
        date: new Date().getTime(),
        isDone: false,
      },
    });
  };

  //기존 todo 업데이트
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  //기존 todo 삭제
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <>
      <main>
        <Header />
        <Editor onCreate={onCreate} />
        <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </main>
    </>
  );
}

export default App;
