import { useEffect, useState } from "react";

export default function PreventEffect() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text !== "") {
      console.log(text);
    }
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
