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

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <DataFetching />
      </ErrorBoundary>
    </div>
  );
}

export default App;
