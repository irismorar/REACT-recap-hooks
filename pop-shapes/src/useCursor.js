import { useRef, useState, useCallback, useEffect } from "react";

export function useCursor(isPaused) {
  const cursorElementRef = useRef(null);
  const [isCursorHighlighted, setIsCursorHighlighted] = useState(false);

  const handleMouseMove = useCallback(
    (event) => {
      if (!cursorElementRef.current) {
        return;
      }
      cursorElementRef.current.style.transform = `translate3d(
        ${event.clientX}px,
        ${event.clientY}px,
        0
      )`;
    },
    [cursorElementRef],
  );

  useEffect(() => {
    if (!isPaused) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, isPaused]);

  const highlightCursor = useCallback(() => {
    setIsCursorHighlighted(true);
  }, []);

  const unhighlightCursor = useCallback(() => {
    setIsCursorHighlighted(false);
  }, []);

  return {
    cursorElementRef,
    isCursorHighlighted,
    highlightCursor,
    unhighlightCursor,
  };
}
