import { useState } from "react";

function FruitsList(){
    const [fruits, setFruits] = useState([])
    const [input, setInput] = useState("");

    function addfruit(){
       
        let trimmed = input.trim();
        setFruits(prev => [...prev, trimmed])
        setInput("");
    }

    function removeFruit(){
        setFruits(prev => prev.slice(0, prev.length - 1));
    }



    return (
        <>
        <h2>Assignment 7 — Fruits List (Add + Remove)</h2>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addfruit}>Add Fruit</button>
        <button onClick={removeFruit} disabled={fruits.length===0}>Remove Last Fruit</button>


        <ul>
            {fruits.map((fruit, index)=>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
        </>
    )
}

export default FruitsList;