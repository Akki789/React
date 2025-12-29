import React, { useState } from "react";
import "./App.css";
import { Suspense } from "react";
import Settings from "./pages/Settings";
import { Route, Routes } from "react-router-dom";
// const Home =

const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Profile = React.lazy(() => import("./components/Profile"));

// Lazy-loaded pages
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Dashboards = React.lazy(() => import("./pages/Dashboards"));

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h2>Welcome to Dashboard</h2>

        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("profile")}>Profile</button>

        {/* <Suspense fallback={<h2>Loading....</h2>}>
          {page === "dashboard" && <Dashboard />}
          {page === "profile" && <Profile />}
        </Suspense> */}

        <Suspense fallback={<h2>Loading page...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboards" element={<Dashboards />} />
          </Routes>
        </Suspense>


        
      </div>
    </div>
  );
}

export default App;
