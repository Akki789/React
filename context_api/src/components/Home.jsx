import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import ThemeProvider from '../context/ThemeProvider';

export default function Home() {
    let {theme, toggle} = useContext(ThemeContext, ThemeProvider);
  return (
    <div style={{
        backgroundColor : theme === "light" ? "white" : "black",
        color : theme === "light" ? "black" : "white",
        padding :"20px"
        
    }}>
        <h2>Current Theme : {theme}</h2>
        
        <button onClick={toggle}>Change Color</button>
    </div>
  )
}
