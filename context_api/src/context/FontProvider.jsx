import React, { useState } from 'react'
import { FontContext } from './FontContext'

export default function FontProvider({children}) {

    const [font, setFont] = useState(Number("12"))

    function increaseFont(){
        setFont(prev => prev+1)
    }
  return (
    <div>
        <FontContext.Provider value={{font, increaseFont}}>
            {children}
        </FontContext.Provider>
    </div>
  )
}
