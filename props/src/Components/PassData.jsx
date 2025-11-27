import React from 'react'

export default function PassData ({name, age, isOnline}) {
  return (
    <div>
        <h2>📝 Assignment 5 — Pass multiple data types as props</h2>
        <p>{name} {age} {isOnline ? ("online"): ("Offline")}</p>
    </div>
  )
}
