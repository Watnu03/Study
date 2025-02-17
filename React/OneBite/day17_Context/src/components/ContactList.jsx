import "./ContactList.css";

import ContactItem from "./ContactItem";
import { stateContext } from "../App";
import { useContext } from "react";

export default function ContactList() {
  const contacts = useContext(stateContext);

  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}
