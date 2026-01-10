import { useCallback, useEffect, useRef, useState } from "react";
import { createShape } from "./createShape";

export function useShapes(cursorRef, scoreRef) {
  const [page, setPage] = useState("tutorial"); // tutorial | play | win
  const [shapes, setShapes] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(195);
  // eslint-disable-next-line no-unused-vars
  const [hasWon, setHasWon] = useState(false);
  const intervalRef = useRef(null);

  const removeShape = useCallback(
    (id) => {
      if (page === "play") {
        const afterRemovingShape = shapes.filter((shape) => {
          return shape.id !== id;
        });
        setShapes(afterRemovingShape);
      }
    },
    [shapes, page]
  );

  useEffect(() => {
    if (!isPaused && page === "play") {
      intervalRef.current = setInterval(() => {
        setShapes((shapes) => {
          return [...shapes, createShape(scoreRef)];
        });
      }, 500);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused, scoreRef, page]);

  const handleMouseMove = useCallback(
    (event) => {
      if (!cursorRef.current) {
        return;
      }
      cursorRef.current.style.transform = `translate3d(
      ${event.clientX}px,
      ${event.clientY}px,
      0
    )`;
    },
    [cursorRef]
  );

  useEffect(() => {
    if (!isPaused) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, isPaused]);

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

  const increaseScoreBy = useCallback(
    (value) => {
      if (page === "play") {
        setScore((prevScore) => {
          return prevScore + value;
        });
      }
    },
    [page]
  );

  return {
    shapes,
    isPaused,
    score,
    page,
    setPage,
    removeShape,
    increaseScoreBy,
  };
}
