export function Shape({ type, x, y, handleClick }) {
  return (
    <div
      className={type}
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={handleClick}
    ></div>
  );
}
