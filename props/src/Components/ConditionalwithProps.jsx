import React from 'react'

export default function ConditionalwithProps({name, role}) {
  return (
    <div>
        <h2>📝 Assignment 13 — Conditional Rendering + Props (Show user role)</h2>
        {role = "admin" ? (<span>{name} Admin Access</span>) : (<span>{name} User Access</span>)}
    </div>
  )
}
