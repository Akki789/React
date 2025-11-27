import { useState, useEffect } from "react";

export default function RunEffect() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("Background changed!");
  }, [color]);

  return (
    <div style={{ backgroundColor: color }}>
      <button
        onClick={() => setColor((prev) => (prev === "red" ? "blue" : "red"))}
      >Toggle</button>
    </div>
  );
}
