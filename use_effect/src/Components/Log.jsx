import React, { useEffect } from 'react';

export default function Log() {

  useEffect(() => {
    console.log("Component Rendered");
  });

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
