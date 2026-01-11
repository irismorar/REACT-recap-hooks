import { useCallback, useEffect, useRef, useState } from "react";
import { createShape } from "./createShape";

export function useGame() {
  const scoreElementRef = useRef(null);
  const [page, setPage] = useState("tutorial"); // tutorial | play | win
  const [shapes, setShapes] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused && page === "play") {
      intervalRef.current = setInterval(() => {
        setShapes((shapes) => {
          return [...shapes, createShape(scoreElementRef)];
        });
      }, 500);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused, page]);

  const handleKeyUp = useCallback((event) => {
    if (event.key === "p") {
      setIsPaused((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  const popShape = useCallback(
    (poppedShape) => {
      const shapeScoreValue = poppedShape.scoreValue;
      const newScore = score + shapeScoreValue;

      setScore(newScore);

      const afterRemovingShape = shapes.filter((shape) => {
        return shape.id !== poppedShape.id;
      });
      setShapes(afterRemovingShape);

      if (newScore > 200 && afterRemovingShape.length < 20) {
        setPage("win");
      }
    },
    [score, shapes],
  );

  return {
    scoreElementRef,
    shapes,
    isPaused,
    score,
    page,
    setPage,
    popShape,
  };
}
