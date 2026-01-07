import "./App.css";
import { useShapes } from "./useShapes";
import { Circle } from "./Circle";
import { useRef } from "react";

export default function App() {
  const cursorRef = useRef(null);
  const { shapes, removeShape } = useShapes(cursorRef);

  return (
    <section>
      <div className="cursor" ref={cursorRef}></div>
      {shapes.map((shape) => {
        return (
          <Circle
            key={shape.id}
            x={shape.x}
            y={shape.y}
            handleClick={() => {
              removeShape(shape.id);
            }}
          />
        );
      })}
    </section>
  );
}
