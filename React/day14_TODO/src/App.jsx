import "./App.css";

import { useRef, useState } from "react";

import Editor from "./components/editor";
import Header from "./components/header";
import TodoList from "./components/todoList";

const mockTodos = [
  { id: 0, content: "할 일 0", date: new Date().getTime(), isDone: true },
  { id: 1, content: "할 일 1", date: new Date().getTime(), isDone: false },
  { id: 2, content: "할 일 2", date: new Date().getTime(), isDone: false },
];

function App() {
  const idRef = useRef(3);
  const [todos, setTodos] = useState(mockTodos);

  //새로운 todo item
  const createTodo = (content) => {
    const newTodo = {
      //idRef를 이용해서 중복되지않게 id 생성
      id: idRef.current++,
      content: content,
      date: new Date().getTime(),
      isDone: false,
    };
    return newTodo;
  };

  //새로운 todo 생성
  const onCreate = (content) => {
    setTodos((prevTodos) => [...prevTodos, createTodo(content)]);
  };

  //기존 todo 업데이트
  const onUpdate = (targetId) => {
    const updatedTodos = todos.map((todo) => {
      return (
        /*NOTE: todo update => 삼항연산자
          1. todo.id===targetId가 같다면 {}객체를 아니라면 todo 를 그대로 반환한다
          2-1. {...todo} 는 기존 todo 객체를 복사
          2-2. isDone: !todo.isDone 은 기존 idDone 값을 반대로 업데이트
        */
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    });

    setTodos(updatedTodos);
  };

  const onDelete = (targetId) => {
    const deletedTodos = todos.filter((todo) => {
      return todo.id !== targetId;
    });
    setTodos(deletedTodos);
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
