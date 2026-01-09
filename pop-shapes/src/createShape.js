export function createShape(scoreRef) {
  const shapes = ["circle", "square", "diamond"];

  const posX = Math.random() * (window.innerWidth - 80);
  const posY = Math.random() * (window.innerHeight - 80);

  const scorePos = scoreRef.current.getBoundingClientRect();

  if (isOutsideTheBox(posX, posY, scorePos)) {
    return {
      id: crypto.randomUUID(),
      type: shapes[Math.ceil((Math.random() || 0.1) * shapes.length) - 1],
      x: posX,
      y: posY,
    };
  }
}

function isOutsideTheBox(shapePosX, shapePosY, scoreBoxPos) {
  return shapePosX > scoreBoxPos.right || shapePosY > scoreBoxPos.bottom;
}
