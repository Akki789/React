import { useState } from "react";
import "./App.css";

import ThemeProvider from "./context/ThemeProvider";
import Home from "./components/Home";

import AuthProvider from "./context/AuthProvider";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import LanguageProvider from "./context/LanguageProvider";
import Greeting from "./components/Greeting";
import NotificationProvider from "./context/NotificationProvider";
import NotificationBar from "./components/NotificationBar";
import NotificationControls from "./components/NotificationControls";
import CounterProvider from "./context/CounterProvider";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import CombinedProvider from "./context/CombinedProvider";
import SettingsPanel from "./components/SettingsPanel";


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


        <LanguageProvider>
          <Greeting />
        </LanguageProvider>

        <NotificationProvider>
          <NotificationBar />
          <NotificationControls />
        </NotificationProvider>

        <CounterProvider>
          <CounterDisplay />
          <CounterControls />
        </CounterProvider>

        <CombinedProvider>
          <SettingsPanel />
        </CombinedProvider>
      </div>
    </div>
  );
}

export default App;
