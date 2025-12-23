export function Button({ onHandleClick, text, activeButtonState }) {
  return (
    <button
      style={{
        backgroundColor:
          activeButtonState === text
            ? "hsla(205, 66%, 33%, 1)"
            : "hsla(0, 0%, 100%, .15)",
        color: activeButtonState === text ? "#242424" : "hsla(0, 0%, 100%, .8)",
      }}
      onClick={onHandleClick}
    >
      {text}
    </button>
  );
}
