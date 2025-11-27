import { useEffect, useState } from "react";

export default function EvenEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 2 === 0) {
      console.log("Even count:", count);
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
