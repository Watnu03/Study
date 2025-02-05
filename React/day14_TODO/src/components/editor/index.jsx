import React from "react";
import styles from "./editor.module.css";

const Editor = () => {
  return (
    <section className={styles.todoEditor}>
      <input
        type="text"
        placeholder="새로운 Todo..."
        className={styles.todo_input}
      />
      <button className={styles.todo_add}>추가</button>
    </section>
  );
};

export default Editor;
