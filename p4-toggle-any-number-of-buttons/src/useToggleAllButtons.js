import { useState } from "react";

export function useToggleAllButtons() {
  const [buttons, setButtons] = useState({
    button1: {
      name: "A",
      isActive: false,
    },
    button2: {
      name: "B",
      isActive: false,
    },
    button3: {
      name: "C",
      isActive: false,
    },
    button4: {
      name: "D",
      isActive: false,
    },
    button5: {
      name: "E",
      isActive: false,
    },
  });

  function toggle(id) {
    const afterToggle = {
      ...buttons,
      [id]: {
        ...buttons[id],
        isActive: !buttons[id].isActive,
      },
    };
    setButtons(afterToggle);
  }

  return {
    buttons,
    toggle,
  };
}
