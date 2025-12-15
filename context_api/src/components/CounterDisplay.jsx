import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

export default function CounterDisplay() {
   let {count} =  useContext(CounterContext)
  return (
    <div>
        <p>{count}</p>
    </div>
  )
}
