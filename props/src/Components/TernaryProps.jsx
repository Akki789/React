import React from 'react'

export default function TernaryProps({title, inStock}) {
  return (
    <div>
        <h2>📝 Assignment 9 — Card that uses ternary with props</h2>
        <p>{inStock ?  <span style={{color: "green"}}>{title} In Stock</span> : <span style={{color: "red"}}>{title}Out of Stock</span> }</p>
    </div>
  )
}
