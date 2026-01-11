import "./App.css";
import { useGame } from "./useGame";
import { Shape } from "./Shape";
import { useCursor } from "./useCursor";

export default function App() {
  const { scoreElementRef, shapes, isPaused, score, page, setPage, popShape } =
    useGame();

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
          <h1>Hey, famous!</h1>
          In order to beat the Master Machine you need to do the following:
          <br />
          &bull; Have a score higher than 200
          <br />
          &bull; Have less than 20 shapes on the screen.
          <br /> <br /> Crack on!
          <div>
            <button
              onClick={() => {
                setPage("play");
                unhighlightCursor();
              }}
              onMouseEnter={highlightCursor}
              onMouseLeave={unhighlightCursor}
            >
              Start game
            </button>
          </div>
        </section>
      )}
      {page === "play" && (
        <>
          {shapes.map((shape) => {
            return <Shape key={shape.id} shape={shape} onPopShape={popShape} />;
          })}
          <div className="score-box" ref={scoreElementRef}>
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
