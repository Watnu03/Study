import React, { useRef, useState } from "react";

import styles from "./editor.module.css";

const Editor = ({ onCreate }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");

  const handleNewTodo = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    /*NOTE: trim()
      문자열의 앞뒤 공백을 제거하는 함수
      스페이스바나 줄바꿈의 경우에도 공백으로 인식하게 해줌
    */
    if (content.trim() === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    // e.keyCode === 13 과 동일함 => 옛날방식
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <section className={styles.todoEditor}>
      <input
        type="text"
        value={content}
        onChange={handleNewTodo}
        onKeyDown={onKeyDown}
        ref={contentRef}
        placeholder="새로운 Todo..."
        className={styles.todo_input}
      />
      <button onClick={onSubmit} className={styles.todo_add}>
        추가
      </button>
    </section>
  );
};

export default Editor;
