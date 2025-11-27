import { useState } from "react"

export default function Counterwithplusminus(){

    const [num, setNum] = useState(0);

    function increase(){
        setNum(prev => prev+1)
    }

     function decrease(){
        setNum(prev => prev-1)
    }

    return(
        <>
        <h2>Assignment 2: Counter with + and - (No Negative)</h2>
        <p>{num}</p>
        <button>+1</button>
        <button>-1</button>
        </>
    )
}