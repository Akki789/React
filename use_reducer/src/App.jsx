import { createContext, useReducer } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import CounterFive from "./components/counter/CounterFive";
import CounterFour from "./components/counter/CounterFour";
import CounterThree from "./components/counter/CounterThree";
import CounterTwo from "./components/counter/CounterTwo";
import ComponentA from "./components/reducerContext/ComponentA";
import ComponentB from "./components/reducerContext/ComponentB";
import ComponentC from "./components/reducerContext/ComponentC";
import DataFetching from "./components/user/DataFetching";

export const CounterContext = createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return initialState;

    default:
      return state;
  }
};


function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <h2>Counter 1</h2>
        <Counter />
        <h2>Counter 2</h2>
        <CounterTwo />
        <h2>Counter 3</h2>
        <CounterThree />
        <h2>Counter 4</h2>
        <CounterFour />
        <h2>Counter 5</h2>
        <CounterFive /> */}

        <CounterContext.Provider value={{count,dispatch}}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </CounterContext.Provider>

        <DataFetching />
      </div>
    </div>
  )
}

export default App;