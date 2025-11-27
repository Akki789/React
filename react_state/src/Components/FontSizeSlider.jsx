import { useState } from "react"

export default function FontSizeSlider(){

    const [size, setSize] = useState(10);

    function handleText(e){
        setSize(Number(e.target.value))
    }

    return(
        <>
        <h2>✅ Assignment 12 — Font Size Slider (Dynamic Text Size)</h2>
        <p style={{ fontSize: `${size}px` }}>Live Preview Text(size: {size}px)</p>
        <input type="range" value={size} min="10" max="48" onChange={handleText}/>
        </>
    )
}