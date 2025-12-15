import React, { useContext } from 'react'
import { NotificationContext } from '../context/NotificationContext'

export default function NotificationBar() {
    let {msg, clearMessage} = useContext(NotificationContext)

    // function message(){
    //     if(msg===null) return;
        
    // }

    if(!msg) {
        return;
    }

  return (
    <div>
        <p>{msg}</p>
        <button onClick={clearMessage}>Clear Message</button>
    </div>
  )
}
