import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/home";
import Contact from "./Pages/Contact";
import Movies from "./Pages/Movies";
import MovieDetails from "./Components/MovieDetails";
import Team from "./pages/Team";
import Company from "./pages/Company";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Billing from "./Pages/Billing";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Simple Routes */}
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="company" element={<Company />} />
          </Route>

          <Route path="/contact" element={<Contact />} />

          {/* Movies Assignment */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />

          {/* Dashboard Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="billing" element={<Billing />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
