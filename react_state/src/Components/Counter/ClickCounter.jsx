import { useState } from "react"

export default function ClickCounter(){
    const [num, setNum] = useState(0)
    
    function increase(){
        setNum(prev => prev+1)
    }
    return(
        <div>
            <h2>Assignment 1: Basic Click Counter</h2>
            <p>{num}</p>
            <button onClick={increase}>Increase</button>
        </div>
    )
}