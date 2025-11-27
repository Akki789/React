export default function ReturnComponents(){
    const age = 19;
    return(
        <div>
            <h2>📝 Assignment 3 — Return different components based on age</h2>
            {age>=18 ? (<Adult />) : (<Minor />)}
        </div>
    )
}

function Adult(){
    
    return(
        <div>
            <h2>Adult</h2>
            
        </div>
    )
}

function Minor(){
  
    return(
        <div>
            <h2>Minor</h2>
        </div>
    )
}