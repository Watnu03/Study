import "./App.css";

import Editor from "./components/editor";
import Header from "./components/header";
import TodoList from "./components/todoList";
import { useState } from "react";

const mockTodos = [
  { id: 0, content: "할 일 0", date: new Date().getTime(), isDone: true },
  { id: 1, content: "할 일 1", date: new Date().getTime(), isDone: false },
  { id: 2, content: "할 일 2", date: new Date().getTime(), isDone: false },
];

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <main>
        <Header />
        <Editor />
        <TodoList />
      </main>
    </>
  );
}

export default App;
