import React, { useReducer } from "react";

const initialState = {
    firstCount:0
}
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        firstCount: state.firstCount + action.value
      }

    case "DECREMENT":
       return {
        ...state,
        firstCount: state.firstCount - action.value
      }


    case "RESET":
      return initialState;


    default:
      return state;
  }
};

export default function CounterFive() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

   return(
     <div>
      <p>Count: {count.firstCount}</p>
      <button onClick={() => dispatch({type:'INCREMENT', value:1})}>Increase</button>
      <button onClick={() => dispatch({type:'INCREMENT', value:5})}>Increase by 5</button>
      <button onClick={() => dispatch({type:'DECREMENT', value:1})} >Decrease</button>
      <button onClick={() => dispatch({type:'RESET'})}>Reset</button>

      <p>Second Count: {countTwo.firstCount}</p>
      <button onClick={() => dispatchTwo({type:'INCREMENT', value:1})}>Increase</button>
      <button onClick={() => dispatchTwo({type:'DECREMENT', value:1})}>Decrease</button>
      <button onClick={() => dispatchTwo({type:'RESET'})}>Reset</button>
    </div>
   )
  
}
