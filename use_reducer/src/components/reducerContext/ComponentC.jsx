import React, { useContext } from 'react'
import { CounterContext } from '../../App'

export default function ComponentC() {
   const {count,dispatch} =  useContext(CounterContext)
  return (
    <div>
        <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  )
}
