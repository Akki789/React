import React, { useContext } from 'react'
import { CounterContext } from '../../App'

export default function ComponentA() {
   const {countState,countDispatch} =  useContext(CounterContext)
  return (
    <div>
        <h1>Counter: {countState} </h1>
        <button onClick={() => countDispatch("INCREMENT")}>Increase</button>
    </div>
  )
}
