import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  //Rememeber if you are setting state based on the previous state
  //Pass in a function that accepts the previous state as an argument
  function incrementFive() {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  }
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Incrememt 5</button>
    </div>
  );
}

export default HookCounter2;
