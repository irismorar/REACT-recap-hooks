export function Shape({ shape, onPopShape }) {
  return (
    <div
      className={shape.type}
      style={{ left: `${shape.x}px`, top: `${shape.y}px` }}
      onClick={() => onPopShape(shape)}
    ></div>
  );
}
