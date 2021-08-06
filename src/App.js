import React, { useReducer } from "react";
import ClassCounter from "./components/ClassCounter";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import ClassCounter2 from "./components/ClassCounter2";
import HookCounterFx from "./components/HookCounterFx";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/intervalHookCounter";
import DataFetching from "./components/DataFetching";
import ErrorBoundary from "./components/ErrorBoundary";
import ReducerCounter from "./components/ReducerCounter";
import ReducerCounter2 from "./components/ReducerCounter2";
import ReducerCounter3 from "./components/ReducerCounter3";
import CounterA from "./components/CounterA";
import CounterB from "./components/CounterB";
import CounterC from "./components/CounterC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count - {count}
        <ErrorBoundary>
          <CounterA />
          <CounterB />
          <CounterC />
        </ErrorBoundary>
      </div>
    </CountContext.Provider>
  );
}

export default App;
