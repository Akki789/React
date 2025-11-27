import React, { useEffect } from "react";

export default function RuntwoEffects() {
  useEffect(() => {
    console.log("Render happened");
  });

  
  useEffect(() => {
    console.log("Mounted!");
  }, []);

  return <div></div>;
}
