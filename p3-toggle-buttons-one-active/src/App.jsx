import "./App.css";
import { useToggleButtonsOneActive } from "./useToggleButtonsOneActive";
import { Button } from "./Button";

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
        {["left", "center", "right"].map((buttonText) => {
          return (
            <Button
              key={buttonText}
              activeButtonState={activeButton}
              onHandleClick={() => setActiveButton(buttonText)}
              text={buttonText}
            />
          );
        })}
      </section>
    </section>
  );
}
