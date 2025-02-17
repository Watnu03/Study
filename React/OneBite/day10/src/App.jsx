import { useState } from "react";

function Welcome({ name, isMember }) {
  return (
    // 1번째
    // <h1>
    //   {(isMember && `${name}님 다시 오셨군요`) || `${name}님 가입하시겠어요?`}
    // </h1>

    // 2번째
    <h1>
      {isMember ? `${name}님 다시 오셨군요` : `${name}님 가입하시겠어요?`}
    </h1>
  );
}

function App() {
  const [name, setName] = useState("");
  const [isMember, setIsMember] = useState(false);

  if (name === "" || name === null || name === undefined) {
    setName("이름없는자");
    setIsMember(false);
  }

  return (
    <>
      <Welcome name={name} isMember={isMember} />
    </>
  );
}

export default App;
