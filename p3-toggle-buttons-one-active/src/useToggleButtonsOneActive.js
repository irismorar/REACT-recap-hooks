import { useState } from "react";

export function useToggleButtonsOneActive() {
  const [activeButton, setActiveButton] = useState("left");

  return {
    activeButton,
    setActiveButton,
  };
}
