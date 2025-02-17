import "./ContactEditor.css";

import { useRef, useState } from "react";

const emailReg =
  /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

export default function ContactEditor({ onCreate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();

  const handleAddContact = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      nameRef.current.focus();
      return;
    } else if (email.trim() === "") {
      emailRef.current.focus();
      return;
    } else if (!emailReg.test(email)) {
      alert("이메일 양식이 아님!");
      emailRef.current.focus();
      return;
    }

    onCreate(name, email);

    setName("");
    setEmail("");
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          className="name"
          placeholder="이름 ..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          ref={nameRef}
        />
        <input
          className="contact"
          placeholder="연락처(이메일) ..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          ref={emailRef}
        />
      </div>
      <button onClick={handleAddContact}>Add</button>
    </div>
  );
}
