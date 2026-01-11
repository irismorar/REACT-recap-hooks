import "./App.css";
import { useShapes } from "./useShapes";
import { Shape } from "./Shape";
import { useRef } from "react";
import { useCursor } from "./useCursor";

export default function App() {
  const scoreRef = useRef(null);
  const { shapes, isPaused, score, page, setPage, handleClickShape } =
    useShapes(scoreRef);

  const {
    cursorElementRef,
    isCursorHighlighted,
    highlightCursor,
    unhighlightCursor,
  } = useCursor(isPaused);

  return (
    <section>
      <div
        className={`cursor${isCursorHighlighted ? " highlight" : ""}`}
        ref={cursorElementRef}
      ></div>
      {isPaused && <div className="pause-box">Pause</div>}
      {page === "tutorial" && (
        <section className="tutorial-box">
          <div>
            Hey famous,
            <br />
            <br />
            In order to beat the Master Machine you need to do the following:
            <br />
            1. Have a score higher than 200
            <br />
            2. Have less than 20 shapes on the screen.
            <br /> <br /> Crack on!
          </div>
          <button
            onClick={() => {
              setPage("play");
            }}
            onMouseEnter={highlightCursor}
            onMouseLeave={unhighlightCursor}
          >
            Start game
          </button>
        </section>
      )}
      {page === "play" && (
        <>
          {shapes.map((shape) => {
            return (
              <Shape
                key={shape.id}
                type={shape.type}
                x={shape.x}
                y={shape.y}
                handleClick={() => {
                  handleClickShape(shape);
                }}
              />
            );
          })}
          <div className="score-box" ref={scoreRef}>
            Score: {score}
          </div>
        </>
      )}
      {page === "win" && (
        <section className="congrats-box">Not the best but congrats!</section>
      )}
    </section>
  );
}
