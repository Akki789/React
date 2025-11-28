
// useEffect - side effects

// useEffect(() => {
//   // operations
// }, depndency array)


import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Log from "./Components/Log";
import Firstlog from "./Components/Firstlog";
import UpdateDocument from "./Components/UpdateDocument";
import RuntwoEffects from "./Components/RuntwoEffects";
import EvenEffect from "./Components/EvenEffect";
import MultipleDependencies from "./Components/MultipleDependencies";
import PreventEffect from "./Components/PreventEffect";
import RunEffect from "./Components/RunEffect";
import Longtext from "./Components/Longtext";
import SelectEffect from "./Components/SelectedEffect";
import RunEffect2 from "./Components/RunEffect2";
import Fetch from "./Components/Fetch";
import AutoCounter from "./Components/AutoCounter";
import UseEffectTrigger from "./Components/UseEffectTrigger";


function App() {
  // let [count, setCount] = useState(0);
  // let [text, setText] = useState("");
  
  // useEffect(() => {
  //   console.log("effect called!");
  // }, [count]);

  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <h1>Hello World!</h1>
        <button onClick={() => setCount(count+1)}>
          Count: {count}
        </button>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <p>{text}</p> */}

        {/* <h2>Users</h2>
        <Users /> */}

        {/* Assignments */}
        <h2>Assignment 1 — Log “Component Rendered” on every render</h2>
        <Log />

        <h2>Assignment 2 — Log message only on first render</h2>
        <Firstlog />

        <h2>Assignment 3 — Update document title with count</h2>
        <UpdateDocument />

        <h2>Assignment 4 — Run two effects: one on every render, one only on mount</h2>
        <RuntwoEffects />

        <h2>Assignment 5 — Effect runs only when count is EVEN</h2>
        <EvenEffect />

        <h2>Assignment 6 — Effect with multiple dependencies</h2>
        <MultipleDependencies />

        <h2>Assignment 7 — Prevent effect from running when input is empty</h2>
        <PreventEffect />

        <h2>✅ Assignment 8 — Run effect only when the component’s background color changes</h2>
        <RunEffect />

        <h2>✅ Assignment 9 — Run effect when user types more than 5 characters</h2>
        <Longtext />

        <h2>✅ Assignment 10 — Effect runs when the selected option changes</h2>
        <SelectEffect />

        <h2>✅ Assignment 11 — Run effect only when BOTH values change at least once</h2>
        <RunEffect2 />

        <h2>✅ Assignment 12 — Fetch on Search Input (with Conditional Effect)</h2>
        <Fetch />

        <h2>✅ Assignment 13 — Auto-Counter with Cleanup</h2>
        <AutoCounter />

        <h2>✅ Assignment 14 — Props Change → UseEffect Trigger</h2>
       <UseEffectTrigger />
      </div>
    </div>
  )
}

export default App




