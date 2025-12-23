import React, { useMemo, useState } from 'react'

const logText = `
INFO App started
WARN Disk usage high
INFO User logged in
ERROR Database connection failed
INFO Retrying connection
WARN Memory usage high
ERROR Timeout while fetching data
INFO Operation successful
`;

export default function LogAnalyzer() {
    const [toggle, setToggle] = useState(false);

  return (
    <div>
        <p>Error Count : {errorCount}</p>
        <p>Warn Count : {warnCount}</p>
    </div>
  )
}
