import React, { useState } from 'react'
import { LayoutContext } from './LayoutContext'

export default function LayoutProvider({children}) {
    const [layout, setLayout] = useState("grid");

    function togggleLayout(){
        setLayout(layout === "grid" ? "list" : "grid")
    }
  return (
    <div>
        <LayoutContext.Provider value={{layout, togggleLayout}}>
            {children}
        </LayoutContext.Provider>
    </div>
  )
}
