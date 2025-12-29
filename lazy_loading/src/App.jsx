import React, { useState } from "react";
import "./App.css";
import { Suspense } from "react";

const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Profile = React.lazy(() => import ("./components/Profile"))

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h2>Welcome to Dashboard</h2>

        <button onClick={() => setPage("dashboard")} >Dashboard</button>
        <button onClick={() => setPage("profile")}>Profile</button>
      
        <Suspense fallback={<h2>Loading....</h2>}>
          {page === "dashboard" && <Dashboard />}
          {page === "profile" && <Profile />}
        </Suspense>
      </div>
    </div>
  )
}

export default App;