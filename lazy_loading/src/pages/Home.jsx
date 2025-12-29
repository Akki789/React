import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h2>Home</h2>

        <nav>
          <Link to="dashboard">Dashboard</Link>
          <Link to="login">Login</Link>
          <Link to="settings">Settings</Link>
          
        </nav>

        <br />

        <Outlet />
    </div>
  )
}
