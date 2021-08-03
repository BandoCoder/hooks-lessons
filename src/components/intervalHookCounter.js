import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  let someProp;

  useEffect(() => {
    //Example of note
    function doSomething() {
      console.log(someProp);
    }
    doSomething();
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [someProp]);
  //Always check dependencies for useEffect, consider defining functions used for useEffect
  //inside useEffect to make the required dependency list more apparent.
  return <div>{count}</div>;
}

export default IntervalHookCounter;
