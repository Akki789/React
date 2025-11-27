import React, { useEffect } from 'react';

export default function Firstlog() {

  useEffect(() => {
    console.log("App Loaded");
  }, []);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}
