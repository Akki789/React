import React, { useEffect, useRef } from 'react';

export default function PageVisitTracker() {
  const visitCount = useRef(0);
  const startTime = useRef(null);

  useEffect(() => {
     visitCount.current++;
     startTime.current = Date.now();

     console.log("Page Visited");

     return() => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime.current) / 1000);

      console.log("Visit Count:", visitCount.current);
      console.log("Time Spent:",timeSpent, "sec");
     }
  
  }, [])

  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}
