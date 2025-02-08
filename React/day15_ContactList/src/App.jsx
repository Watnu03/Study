import "./App.css";

import { useReducer, useRef } from "react";

import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockData = [
  { id: 0, name: "Alice", email: "alice@example.com" },
  { id: 1, name: "Bob", email: "bob@example.com" },
  { id: 2, name: "Charlie", email: "charlie@example.com" },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
  }
}

function App() {
  const idRef = useRef(3);
  const [contacts, dispatch] = useReducer(reducer, mockData);

  const onCreate = (name, email) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: name,
        email: email,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
