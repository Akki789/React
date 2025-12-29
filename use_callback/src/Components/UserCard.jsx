import React, { use, useMemo } from 'react'

export default function UserCard() {
    const user = useMemo(() => {
        return {name:"Akash"}
    }, []);

  return (
    <div>
        <Child obj={user} />
    </div>
  )
}

let Child = React.memo(({obj}) =>{
    return (<div>{obj.name}</div>) 
})
