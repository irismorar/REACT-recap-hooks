import { useState } from "react";

export function useToggleMax3Buttons() {
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
    button6: {
      name: "F",
      isActive: false,
    },
    button7: {
      name: "G",
      isActive: false,
    },
  });

  function toggle(id) {
    setButtons((prevButtons) => {
      const numberOfButtonsToggledOn = Object.values(prevButtons).filter(
        (button) => {
          return button.isActive;
        }
      ).length;

      if (prevButtons[id].isActive) {
        return {
          ...prevButtons,
          [id]: { ...prevButtons[id], isActive: false },
        };
      }
      if (numberOfButtonsToggledOn < 3) {
        return {
          ...prevButtons,
          [id]: { ...prevButtons[id], isActive: true },
        };
      }
      return prevButtons;
    });
  }

  function resetApp() {
    setButtons({
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
      button6: {
        name: "F",
        isActive: false,
      },
      button7: {
        name: "G",
        isActive: false,
      },
    });
  }

  return {
    buttons,
    toggle,
    resetApp,
  };
}
