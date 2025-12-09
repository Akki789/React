import { useState } from "react";
import "./App.css";

import ThemeProvider from "./context/ThemeProvider";
import Home from "./components/Home";

import AuthProvider from "./context/AuthProvider";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <ThemeProvider>
          <Home />
        </ThemeProvider>

        <AuthProvider>
          <Navbar />
          <Login />
          <Dashboard />
        </AuthProvider>

      </div>
    </div>
  );
}

export default App;
