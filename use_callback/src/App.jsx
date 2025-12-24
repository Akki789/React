import "./App.css";
import CounterCallback from "./Components/CounterCallback";
import FileSize from "./Components/FileSize";
import MessageCategorizer from "./Components/MessageCategorizer";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <CounterCallback />
        <h1>Assignment 5: </h1>
        <FileSize />
        <h1>🧪 ASSIGNMENT 6: Message Categorizer</h1>
        <MessageCategorizer />
      </div>
    </div>
  )
}

export default App;