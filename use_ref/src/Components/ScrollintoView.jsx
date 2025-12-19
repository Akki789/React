import React, { useRef } from 'react'

export default function ScrollintoView() {

    const targetSection = useRef(null);

    function scroll(){
        targetSection.current.scrollIntoView();
    }
  return (
    <div>
        <button onClick={scroll}>Scroll to View</button>
        <div style={{height : 1000}}></div>
        <div ref={targetSection} style={{background:"green"}}>Target Section</div>
    </div>
  )
}
