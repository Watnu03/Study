import React, { useState } from "react";

import TodoItem from "../todoItem";
import styles from "./todoList.module.css";

const TodoList = ({ todos, onUpdate, onDelete }) => {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const getFilteredTodos = () => {
    if (keyword.trim() === "") {
      return todos;
    }
    /*NOTE: includes()
    문자열에 특정 값이 포함되어 있는지 (True,False)확인하는 메서드
    하지만 todos.filter(...)내부에서는 True를 반환하는 항목들만 새로운 배열로 반환됨
    */
    return todos.filter(
      (todo) => todo.content.toLowerCase().includes(keyword.toLowerCase())
      /*NOTE: toLowerCase()
      소문자로 변환 => 검색할때 대소문자 상관없이 결과를 보고싶을때 옵션
      */
    );
  };
  const filteredTodos = getFilteredTodos();

  return (
    <section className={styles.todoList}>
      <h3>Todo List 🌱</h3>
      <input
        type="text"
        value={keyword}
        onChange={onChangeKeyword}
        placeholder="검색어를 입력하세요"
      />
      {filteredTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
    </section>
  );
};

export default TodoList;
