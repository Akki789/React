import React, { useState } from 'react'
import { NotificationContext } from './NotificationContext'

export default function NotificationProvider({children}) {
    const [msg, setMsg] = useState(null);

    function showMessage(text){
        setMsg(text)
    }

    function clearMessage(){
        setMsg("")
    }

  return (
    <div>
        <NotificationContext.Provider value={{msg, showMessage , clearMessage }}>
            {children}
        </NotificationContext.Provider>
    </div>
  )
}
