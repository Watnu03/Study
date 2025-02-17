import "./App.css";

import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount((result) => result + value);
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: "33px", marginBottom: "20px" }}>Simple Counter</h1>
      <Viewer count={count} />
      <Controller onUpdateCount={handleCount} />
    </div>
  );
}

export default App;
