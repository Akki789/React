import { useEffect, useState } from "react";

export default function Fetch() {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (text.length !== 3) {
      setResult([]);
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${text}`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

    {text.length < 3 ? (
                <p>Please type at least 3 characters!</p>
            ) : (
                <ul>
                    {result.map((u) => (
                        <li key={u.id}>{u.name}</li>
                    ))}
                </ul>
            )}
    </div>
  );
}
