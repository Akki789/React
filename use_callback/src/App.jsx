import "./App.css";
import BuggyCode from "./Components/BuggyCode";
import CounterCallback from "./Components/CounterCallback";
import FileSize from "./Components/FileSize";
import MemoizedToolbar from "./Components/MemoizedToolbar";
import MessageCategorizer from "./Components/MessageCategorizer";
import UserCard from "./Components/UserCard";
import WrongUseMemo from "./Components/WrongUseMemo";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <CounterCallback />
        <h2>Assignment 5: </h2>
        <FileSize />
        <h2>🧪 ASSIGNMENT 6: Message Categorizer</h2>
        <MessageCategorizer />
        <h2>🐞 DEBUG ASSIGNMENT 2: React.memo Not Working as Expected</h2>
        <BuggyCode />
        <h2>🐞 DEBUG ASSIGNMENT 3: Wrong useMemo Dependency Causes Stale Data</h2>
        <WrongUseMemo />

        <h1>UseCallback Assignments</h1>
        <h2>🧪 ASSIGNMENT 1: Memoized Toolbar with Action Buttons</h2>
        <MemoizedToolbar />
        <h2>🧪 ASSIGNMENT 2: Memoized User Card with Object Props</h2>
        <UserCard />
        <h2>🧪 ASSIGNMENT 3: Combined Case (useMemo + useCallback + React.memo)</h2>
        
      </div>
    </div>
  )
}

export default App;