import "./App.css";
import { useToggleAllButtons } from "./useToggleAllButtons";
import { Button } from "./Button";

export default function App() {
  const { buttons, toggle } = useToggleAllButtons();

  return (
    <section className="app-container">
      <h1>Let's toggle them all!</h1>
      <section>
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
      </section>
    </section>
  );
}
