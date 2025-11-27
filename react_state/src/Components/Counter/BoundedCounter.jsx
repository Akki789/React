import { useState } from "react"

export default function BoundedCounter(){
    let [count, setCount] = useState(0);

    function increase(){
        setCount(count+1);
    }

    function decrease(){
        if(num==0) return;
        setCount(count -1);
    }

    function reset(){
        setCount(0);
    }

    return(
        <>
        <h2>Assignment 4 : Bounded Counter (0 to 10)</h2>
        <p>{count}</p>
        <button onClick={increase} disabled={num>10}>+1</button>
        <button onClick={decrease} disabled={num<10}>-1</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}