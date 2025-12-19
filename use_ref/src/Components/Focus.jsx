import React, { useEffect, useRef } from 'react'

export default function Focus() {

   let inpRef =  useRef(null);

//    function handleFocus(){
    
//    }

   useEffect(() =>{
        inpRef.current.focus();
   }, [])
   
  return (
    <div>
        <input ref={inpRef} type="text" placeholder='Enter your name'  />
    </div>
  )
}
