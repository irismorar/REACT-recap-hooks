export function Circle({ x, y, handleClick }) {
  return (
    <div
      className="circle"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={handleClick}
    ></div>
  );
}
