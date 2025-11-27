import React from 'react'

export default function DrillingwithChild() {
  return (
    <div>
      <Level1 text="Welcome User" />
    </div>
  )
}

function Level1({ text }) {
  return <Level2 text={text} />
}

function Level2({ text }) {
  return (
    <Card>
      <h3>{text}</h3>
    </Card>
  )
}

function Card({ children }) {
  return <div>{children}</div>
}
