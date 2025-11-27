import { useState } from "react";

function ColorChanger(){
    let[color, setColor] = useState("grey")
    return(
        <>
        <h2>Assignment 5 — Color Changer (Based on Buttons)</h2>
        <div style={{
            height: "150px",
            width: "150px",
            margin: "auto",
            backgroundColor: color,
            border: "2px solid black"
        }}>

        </div>

        <button onClick={()=> setColor("Red")}>Red</button>
        <button onClick={()=> setColor("green")}>Green</button>
        <button onClick={()=> setColor("blue")}>Blue</button>
        </>
    )
}

export default ColorChanger;