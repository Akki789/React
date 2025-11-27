import React from 'react'

export default function PropsDrilling({name}) {
  return (
    <div>
        <Level1 name="Akash" />
        
    </div>
  )
}

function Level1({name}) {
    return <Level2 name={name} /> 
}

function Level2({name}) {
    return <Level3 name={name} />
}

function Level3({name}) {
    return (
        <h2>{name}</h2>
    )
}