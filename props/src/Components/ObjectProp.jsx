import React from 'react'

export default function ObjectProp({user}) {
  return (
    <div>
        <h2>📝 Assignment 7 — Pass an object as a prop</h2>
        <h2>{user.name}</h2>
        <p>Age : {user.age}</p>
        <p>{user.email}</p>
    </div>
  )
}
