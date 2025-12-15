import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

export default function CounterControls() {
    const {increment, decrement} = useContext(CounterContext)
  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
