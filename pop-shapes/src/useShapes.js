import { useCallback, useEffect, useRef, useState } from "react";
import { createShape } from "./createShape";

export function useShapes(cursorRef) {
  const [shapes, setShapes] = useState([]);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);

  const removeShape = useCallback(
    (id) => {
      const afterRemovingShape = shapes.filter((shape) => {
        return shape.id !== id;
      });
      setShapes(afterRemovingShape);
    },
    [shapes]
  );

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setShapes((shapes) => {
          return [...shapes, createShape()];
        });
      }, 500);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused]);

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

  const increaseScoreBy = useCallback((value) => {
    setScore((prevScore) => {
      return prevScore + value;
    });
  }, []);

  return {
    shapes,
    isPaused,
    score,
    removeShape,
    increaseScoreBy,
  };
}
