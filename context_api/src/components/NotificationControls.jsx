import React, { useContext } from 'react'
import { NotificationContext } from '../context/NotificationContext'

export default function NotificationControls() {
   let{showMessage, clearMessage} = useContext(NotificationContext)
  return (
    <div>
        <button onClick={() =>showMessage("This is a notification")}>Show Message</button>

        
    </div>
  )
}
