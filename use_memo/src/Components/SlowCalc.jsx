import React, { useState } from 'react'


function calc(num){
    console.log("Slow calculation running...");
    let total = 0;

    for(let i=0; i< 100000000; i++){
        total+=num;
    }

    return total;
}


export default function SlowCalc() {

    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    let result = calc(count);

    let theme = {
        background: dark ? "#333" : "#fff",
        color : dark ? "#fff" : "#000"
    }


  return (
    <div style={theme}>
        <h3>{result}</h3>
        <button onClick={() => setCount(count+1)}>Increment</button>

        <button onClick={() => setDark(!dark)}>Toggle theme</button>
    </div>
  )
}
