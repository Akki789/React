import { useMemo, useState } from "react";

const sizes = [50, 100, 200, 45, 300, 70, 168, 259];

function App() {
  const [showGuidelines, setShowGuidelines] = useState(false);

  const stats = useMemo(() => {
    console.log("Calculating stats...");
    const total = sizes.reduce((acc, size) => {
      return acc + size;
    }, 0);
    const largest = Math.max(...sizes);
    return { total, largest };
  }, []);

  return (
    <div>
      <h1>File Size Statistics</h1>
      <h3>Total size: {stats.total}</h3>
      <h3>Largest file size: {stats.largest}</h3>

      <button onClick={() => setShowGuidelines(!showGuidelines)}>
        Toggle Guidelines
      </button>

      {showGuidelines && <p>Recommended file size is upto 500 MB</p>}
    </div>
  );
}

export default App;
