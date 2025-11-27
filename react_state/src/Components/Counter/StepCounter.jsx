import { useState } from "react"

export default function StepCounter(){
    const [count, setCount] = useState(1);

    function handleCount(){
        setCount(count => count+count)
    }
    return(
        <>
        <h2>Assignment 3</h2>
        <input type="text" value={count} onChange={(e) => e.target.value} />
        <button onClick={handleCount}>increase</button>
        </>
    )
}