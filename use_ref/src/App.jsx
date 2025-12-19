import { useRef, useState } from "react";
import "./App.css";
import Focus from "./Components/Focus";
import ScrollintoView from "./Components/ScrollintoView";
import VideoRef from "./Components/VideoRef";
import RenderTracker from "./Components/RenderTracker";
import PageVisitTracker from "./Components/PageVisitTracker";

function App() {

  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  console.log("Component Rendered");

  function handleClickRef(){
    countRef.current = countRef.current + 1 ;
    console.log(countRef);
    console.log("Count ref", countRef.current);
  }

  function handleClickState(){
    setCount(prev => prev + 1);
    console.log("Count State :", count);
  }

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h1>Use Ref </h1>
        <button onClick={handleClickRef}>Increment ref</button>
        <button onClick={handleClickState}>Increment State</button>
        <Focus />
        {/* <ScrollintoView /> */}
        <VideoRef />
        <RenderTracker />
        <PageVisitTracker />
      </div>
    </div>
  )
}

export default App;