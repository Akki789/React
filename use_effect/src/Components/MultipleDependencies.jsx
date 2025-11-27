import React, { useEffect, useState } from 'react';

export default function MultipleDependencies() {

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Something changed");
  }, [count, text]);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search ..." 
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />

      <button onClick={() => setCount(count + 1)}>
        Count : {count}
      </button>
    </div>
  );
}
