import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prev) => prev + 1);
  }

  function decrementCounter() {
    setCounter((prev) => prev - 1);
  }

  function resetCounter() {
    setCounter(0);
  }

  return {
    counter,
    incrementCounter,
    decrementCounter,
    resetCounter,
  };
}
