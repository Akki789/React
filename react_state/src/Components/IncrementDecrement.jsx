import { useState } from "react";

function IncrementDecrement(){
   const [num, setNum] = useState(0);

   function handleIncrement(){
    setNum(prev => prev+2)
   }

   function handleDecrement(){
    setNum(prev => prev-2)
   }

   function handleReset(){
    setNum(num*0);
   }

    return (
        <>
        <h2>Assignment 6 — Increment & Decrement by 2 (Functional Update Required)</h2>
        <p>Current Num: {num}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default IncrementDecrement;