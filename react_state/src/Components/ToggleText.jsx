import { useState } from "react";

function ToggleText() {
  let [text, setText] = useState("Hello Student!");

  function handleToggle() {
    setText((text) =>
      text === "Hello Student!" ? "Welcome to React!!" : "Hello Student!"
    );
  }

  return (
    <>
      <p>{text}</p>
      <button onClick={handleToggle}>Toggle Text</button>
    </>
  );
}

export default ToggleText;
