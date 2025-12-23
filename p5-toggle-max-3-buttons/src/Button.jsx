export function Button({ currentButton, onToggle }) {
  return (
    <button
      style={{
        backgroundColor: currentButton.isActive
          ? "hsla(205, 66%, 33%, 1)"
          : "hsla(0, 0%, 100%, .15)",
        color: currentButton.isActive ? "#242424" : "hsla(0, 0%, 100%, .8)",
      }}
      onClick={() => onToggle()}
    >
      {currentButton.name}
    </button>
  );
}
