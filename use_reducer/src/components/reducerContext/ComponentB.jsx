import React, { useContext } from 'react'
import { CounterContext } from '../../App'

export default function ComponentB() {
   const {countState,countDispatch} =  useContext(CounterContext)
  return (
    <div>
        <button onClick={() => countDispatch("DECREMENT")}>Decrease</button>
    </div>
  )
}
