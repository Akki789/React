import React from 'react'

export default function ReusableButton({text, color}) {
  return (
    <div>
        <h2>📝 Assignment 8 — Reusable Button using props</h2>
        <button style={{ color: color }}>{text}</button>
    </div>
  )
}
