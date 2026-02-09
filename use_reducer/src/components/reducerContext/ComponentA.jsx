import React, { useContext } from 'react'
import { CounterContext } from '../../App'

export default function ComponentA() {
   const {count,dispatch} =  useContext(CounterContext)
  return (
    <div>
        <h1>Counter: {count} </h1>
        <button onClick={() => dispatch("INCREMENT")}>Increase</button>
    </div>
  )
}
