import React, { useState } from 'react'
import { CounterContext } from './CounterContext';

export default function CounterProvider({children}) {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(prev => prev +1);
    }

    function decrement(){
        setCount(prev => prev -1);
    }
  return (
    <div>
        <CounterContext.Provider value={{count, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    </div>
  )
}
