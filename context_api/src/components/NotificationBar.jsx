import React, { useContext } from 'react'
import { NotificationContext } from '../context/NotificationContext'

export default function NotificationBar() {
    let {msg} = useContext(NotificationContext)

    // function message(){
    //     if(msg===null) return;
        
    // }

    if(msg === null) {
        return;
    }
  return (
    <div>
        <p>{msg}</p>
    </div>
  )
}
