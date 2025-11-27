import { useState } from "react";


function LivePreview(){
    let[text, setText] = useState()
    return(
        <>
        <h2>Assignment 4: Live Preview Input</h2>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        <p>You Typed : {text} </p>
        </>
    )
}

export default LivePreview;