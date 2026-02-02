import React, { useRef, useState } from 'react'

export default function RenderTracker() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(count)

    renderCount.current = renderCount.current + 1;
    let time = new Date().toLocaleTimeString();
    function handleClick(){
        setCount(prev => prev +1)
        // console.log(first.current);
        console.log("Renderd" , renderCount.current);
        
        console.log("Last Clicked at", time);
        
    }

  return (
    <div>
         <p>Total Counts : {count}</p>
        <button onClick={handleClick}>Click Me</button>
       
       
    </div>
  )
}
