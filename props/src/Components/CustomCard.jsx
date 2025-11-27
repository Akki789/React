import React from 'react'

export default function CustomCard({title, children}) {
  return (
    <div>
        <h2>📝 Assignment 14 — children Prop + Condition (Custom Card)</h2>
        <h2>{title ? title : "No Title Provided"}</h2>
        <p>{children}</p>
    </div>
  )
}


