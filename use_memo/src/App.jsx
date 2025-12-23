import "./App.css";
import FilteringList from "./Components/FilteringList";
import LogAnalyzer from "./Components/LogAnalyzer";
import ProductSearch from "./Components/ProductSearch";
import SlowCalc from "./Components/SlowCalc";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <SlowCalc />
        <FilteringList />
        <h2>Assignment 3</h2>
        <ProductSearch />
        <h2>🧪 ASSIGNMENT 4: Log Analyzer (Expensive Parsing)</h2>
        <LogAnalyzer />
      </div>
    </div>
  )
}

export default App;