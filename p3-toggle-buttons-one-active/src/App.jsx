import "./App.css";
import { useToggleButtonsOneActive } from "./useToggleButtonsOneActive";

export default function App() {
  const { activeButton, setActiveButton } = useToggleButtonsOneActive();
  return (
    <section className="app-container">
      <div className="titles">
        <h1>Toggle buttons!</h1>
        <h3>
          <em>~only one active~</em>
        </h3>
      </div>
      <section>
        {["left", "center", "right"].map((button) => {
          return (
            <button
              key={button}
              style={{
                backgroundColor:
                  activeButton === button
                    ? "hsla(205, 66%, 33%, 1)"
                    : "hsla(0, 0%, 100%, .15)",
                color:
                  activeButton === button ? "#242424" : "hsla(0, 0%, 100%, .8)",
              }}
              onClick={() => setActiveButton(button)}
            >
              {button}
            </button>
          );
        })}
      </section>
    </section>
  );
}
