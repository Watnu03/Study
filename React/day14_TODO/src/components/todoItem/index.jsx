import React from "react";
import styles from "./todoItem.module.css";
import { useState } from "react";

const TodoItem = ({ id, text, isDone, date }) => {
  const [isChecked, setIsChecked] = useState(isDone);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.todoItem}>
      <div className={styles.item}>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <p
          className={`${styles.todo} ${isChecked ? styles.todo__done : styles.todo__yet}`}
        >
          {text}
        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.date}>{date}</p>
        <button className={styles.delete_btn}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
