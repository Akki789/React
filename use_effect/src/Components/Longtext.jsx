import React, { useEffect, useState } from 'react'

export default function Longtext() {

    const [text, setText] = useState("");

    useEffect(() => {
     if(text.length > 5){
        console.log("Long Text");
     }
    }, [text])
    
  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}
