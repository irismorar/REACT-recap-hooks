import "./App.css";
import { useToggleMax3Buttons } from "./useToggleMax3Buttons";
import { Button } from "./Button";

export default function App() {
  const { buttons, toggle, resetApp } = useToggleMax3Buttons();

  return (
    <section className="app-container">
      <h1>Toggle maximum 3!</h1>
      <section>
        <div>
          <Button
            currentButton={buttons.button1}
            onToggle={() => toggle("button1")}
          />
          <Button
            currentButton={buttons.button2}
            onToggle={() => toggle("button2")}
          />
          <Button
            currentButton={buttons.button3}
            onToggle={() => toggle("button3")}
          />
          <Button
            currentButton={buttons.button4}
            onToggle={() => toggle("button4")}
          />
          <Button
            currentButton={buttons.button5}
            onToggle={() => toggle("button5")}
          />
          <Button
            currentButton={buttons.button6}
            onToggle={() => toggle("button6")}
          />
          <Button
            currentButton={buttons.button7}
            onToggle={() => toggle("button7")}
          />
        </div>
        <button className="reset-button" onClick={resetApp}>
          RESET
        </button>
      </section>
    </section>
  );
}
