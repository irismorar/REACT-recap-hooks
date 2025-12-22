import "./App.css";
import { useToggleButton } from "./useToggleButton";

export default function App() {
  const { isToggledOn, toggleButton, counterToggles } = useToggleButton();

  return (
    <section className="app-container">
      <h1>Toggle me!</h1>
      <button
        onClick={toggleButton}
        style={{
          backgroundColor: isToggledOn
            ? "hsla(205, 66%, 33%, 1)"
            : "hsla(0, 0%, 100%, .15)",
          color: isToggledOn ? "#242424" : "hsla(0, 0%, 100%, .8)",
        }}
      >
        {isToggledOn ? "ON" : "OFF"}
      </button>
      <div>
        {counterToggles === 0
          ? `You haven't toggled the button already!`
          : counterToggles === 1
          ? `You have toggled the button ${counterToggles} time already!`
          : `You have toggled the button ${counterToggles} times already!`}
      </div>
    </section>
  );
}
