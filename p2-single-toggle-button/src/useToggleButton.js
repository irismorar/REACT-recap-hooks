import { useState } from "react";

export function useToggleButton() {
  const [isToggledOn, setIsToggledOn] = useState(false);
  const [counterToggles, setCounterToggles] = useState(0);

  function toggleButton() {
    setIsToggledOn(!isToggledOn);
    setCounterToggles((prev) => prev + 1);
    if (counterToggles === 10) {
      alert("You reached the maximum limit!");
      setIsToggledOn(false);
      setCounterToggles(0);
    }
  }

  return {
    isToggledOn,
    toggleButton,
    counterToggles,
  };
}
