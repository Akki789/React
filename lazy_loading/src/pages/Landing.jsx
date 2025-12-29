import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
        <h2>Landing</h2>

       

        <Outlet />
    </div>
  )
}
