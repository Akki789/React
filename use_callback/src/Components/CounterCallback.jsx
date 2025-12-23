import React, { useCallback, useState } from 'react'

export default function CounterCallback() {
    const [count, setCount] = useState(0);

    // const handleClick = () =>{
    //     console.log("Hello");
    // }

    const handleClick = useCallback(() => {
        console.log("Hello");
    }, [])

  return (
    <div>
        <>
            <button onClick={() => setCount(count+1)}>+</button>
            <Child  onClick={handleClick} />
        </>
    </div>
  )
}

const Child = React.memo(({onClick}) =>{
    console.log("Child Rendred");
    return <button onClick={onClick}>Child Butoon</button>
})
