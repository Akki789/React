import { useState } from 'react'
import './App.css'

import ThemeProvider from './context/ThemeProvider'
import Home from './components/Home'

function App() {

  return (
       <div className="app-shell">
      <div className="assignment-card">
         <ThemeProvider>
          <Home />
         </ThemeProvider>
      </div>
    </div>
  )
}

export default App
