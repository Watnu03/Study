import React from "react";
import styles from "./todoItem.module.css";

const TodoItem = ({ id, content, isDone, date, onUpdate, onDelete }) => {
  const onChangeCheck = () => {
    onUpdate(id);
  };

  const onDeleteTodo = () => {
    onDelete(id);
  };

  return (
    <div className={styles.todoItem}>
      <div className={styles.item}>
        <input type="checkbox" checked={isDone} onChange={onChangeCheck} />
        <p
          className={`${styles.todo} ${
            isDone ? styles.todo__done : styles.todo__yet
          }`}
        >
          {content}
        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>
        <button className={styles.delete_btn} onClick={onDeleteTodo}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
