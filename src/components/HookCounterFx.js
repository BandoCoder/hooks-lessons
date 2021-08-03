import React, { useState, useEffect } from "react";

function HookCounterFx() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  //Conditionally render effects, use a second parameter in useEffect that is an array.
  //Inside this array, enter the state values you want useEffect to fire for.
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterFx;
