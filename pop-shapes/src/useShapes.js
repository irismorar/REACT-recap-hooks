import { useCallback, useEffect, useRef, useState } from "react";

export function useShapes(cursorRef) {
  const [shapes, setShapes] = useState([]);
  const intervalRef = useRef(null);

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
    intervalRef.current = setInterval(() => {
      setShapes((shapes) => {
        return [
          ...shapes,
          {
            id: crypto.randomUUID(),
            x: Math.random() * (window.innerWidth - 80),
            y: Math.random() * (window.innerHeight - 80),
          },
        ];
      });
    }, 500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

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
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return {
    shapes,
    removeShape,
  };
}
