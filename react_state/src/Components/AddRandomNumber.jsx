import { useState } from "react"

export default function AddRandomNumber(){

    const [number, setNumber] = useState([]);

    function randomNumber(){
        let num = Math.floor(Math.random() * 100) + 1;
        setNumber(prev => [...prev, num]);
    }
    return(
        <>
        <h2>✅ Assignment 12 — Add a Random Number</h2>
        <button onClick={randomNumber}>Add Random Number</button>
        <ul>
        {number.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
        </>
    )
}