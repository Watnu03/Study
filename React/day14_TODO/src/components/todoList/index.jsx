import React from "react";
import TodoItem from "../todoItem";
import styles from "./todoList.module.css";

const TodoList = ({ mockTodos }) => {
  return (
    <section className={styles.todoList}>
      <h3>Todo List 🌱</h3>
      <input type="text" placeholder="검색어를 입력하세요" />
      {mockTodos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            id={todo.id}
            text={todo.content}
            isDone={todo.isDone}
            date={todo.date}
          />
        );
      })}
    </section>
  );
};

export default TodoList;
