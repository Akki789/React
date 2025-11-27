import DoubleTriple from "./Components/DoubleTriple"
import "./App.css";
import ToggleText from "./Components/ToggleText";
import LivePreview from "./Components/LivePreview";
import ColorChanger from "./Components/ColorChanger";
import IncrementDecrement from "./Components/IncrementDecrement";
import FruitsList from "./Components/FruitsList";
import MiniForm from "./Components/MiniForm";
import ExpenseTracker from "./Components/ExpenseTracker";
import PostReactions from "./Components/PostReactions";
import FontSizeSlider from "./Components/FontSizeSlider";
import AddRandomNumber from "./Components/AddRandomNumber";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <DoubleTriple />
        <ToggleText/>
        <LivePreview/>
        <ColorChanger/>
        <IncrementDecrement />
        <FruitsList />
        <MiniForm/>
        <ExpenseTracker />
        <PostReactions />
        <FontSizeSlider/>
        <AddRandomNumber/>
      </div>
    </div>
  )
}

export default App;