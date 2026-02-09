import React, { useContext } from 'react'
import { CounterContext } from '../../App'

export default function ComponentB() {
   const {count,dispatch} =  useContext(CounterContext)
  return (
    <div>
        <button onClick={() => dispatch("DECREMENT")}>Decrease</button>
    </div>
  )
}
