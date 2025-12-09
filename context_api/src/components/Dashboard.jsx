import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Dashboard() {
    let{user} = useContext(AuthContext)
  return (
    <div>
        {user ? (<p>Welcome onboard {user.name}</p>) : (<h2>Please Login to view dashboard</h2>)}
    </div>
  )
}
