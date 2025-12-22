import "./App.css";
import { useCounter } from "./useCounter";

export default function App() {
  const { counter, incrementCounter, decrementCounter, resetCounter } =
    useCounter();

  return (
    <section className="app-container">
      <h1>Let's count!</h1>
      <main>
        <div>
          <button className="decrease-button" onClick={decrementCounter}>
            −
          </button>
          <div className="counter">{counter}</div>
          <button className="increase-button" onClick={incrementCounter}>
            +
          </button>
        </div>
        <button className="reset-button" onClick={resetCounter}>
          𝕏
        </button>
      </main>
    </section>
  );
}
