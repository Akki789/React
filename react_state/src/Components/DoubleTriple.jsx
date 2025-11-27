import { useState } from "react"

function DoubleTriple(){
    let [number, setState] = useState(1)
    return (
        <>
        <p>Current number: {number}</p>
        <button onClick={()=>setState(number*2)}>Double</button>
        <button onClick={()=>setState(number*3)}>Triple</button>
        </>
    )
}

export default DoubleTriple;

