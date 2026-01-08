import "./App.css";
import { useShapes } from "./useShapes";
import { Shape } from "./Shape";
import { useRef } from "react";

export default function App() {
  const cursorRef = useRef(null);
  const { shapes, isPaused, score, removeShape, increaseScoreBy } =
    useShapes(cursorRef);

  return (
    <section>
      <div className="cursor" ref={cursorRef}></div>
      {isPaused && <div className="alert-box">Pause</div>}
      {shapes.map((shape) => {
        return (
          <Shape
            key={shape.id}
            type={shape.type}
            x={shape.x}
            y={shape.y}
            handleClick={() => {
              removeShape(shape.id);
              if (shape.type === "circle") {
                increaseScoreBy(3);
              }
              if (shape.type === "square") {
                increaseScoreBy(2);
              }
              if (shape.type === "diamond") {
                increaseScoreBy(1);
              }
            }}
          />
        );
      })}
      <div className="score">Score: {score}</div>
    </section>
  );
}
