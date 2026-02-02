import React, { useContext } from 'react'
import { CounterContext } from '../../App'

export default function ComponentC() {
   const {countState,countDispatch} =  useContext(CounterContext)
  return (
    <div>
        <button onClick={() => countDispatch("RESET")}>Reset</button>
    </div>
  )
}
