import { useState, useEffect } from "react";

export default function SelectEffect() {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (selected !== "") {
      console.log(`Selected: ${selected}`);
    }
  }, [selected]);

  return (
    <div>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">--Select--</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Javascript">Javascript</option>
      </select>
    </div>
  );
}
