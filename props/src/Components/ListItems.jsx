import React from 'react'

export default function ListItems({skills}) {
  return (
    <div>
        <h2>📝 Assignment 6 — Pass an array as props and list items</h2>
        <ul>{skills.map((s,i)=> (
            <li key={i}>{s}</li>
        ))}</ul>
    </div>
  )
}
