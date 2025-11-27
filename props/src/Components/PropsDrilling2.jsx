import React from 'react'

export default function PropsDrilling2() {
  return (
        <div>
            <h2>📝 Assignment 15 — Props Drilling (4 Levels) + Conditional Rendering</h2>
            <A status ="online" />
        </div>
  )
}

function A({status}) {
    return <B status={status} />
}

function B({status}) {
    return <C status={status} />
}

function C({status}) {
    return <StatusBox status={status} />
}

function StatusBox({status}) {
    return (
        <h3 style={{color: status === "online" ? "green" : "red"}}>
            {status}
        </h3>
    )
}