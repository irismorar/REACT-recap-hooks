const shapeScoreValues = {
  circle: 3,
  square: 2,
  diamond: 1,
};

export function createShape(scoreRef) {
  const shapes = ["circle", "square", "diamond"];

  const posX = Math.random() * (window.innerWidth - 80);
  const posY = Math.random() * (window.innerHeight - 80);

  const scorePos = scoreRef.current.getBoundingClientRect();

  const type = shapes[Math.ceil((Math.random() || 0.1) * shapes.length) - 1];

  if (isOutsideTheBox(posX, posY, scorePos)) {
    return {
      id: crypto.randomUUID(),
      type,
      x: posX,
      y: posY,
      scoreValue: shapeScoreValues[type],
    };
  }
}

function isOutsideTheBox(shapePosX, shapePosY, scoreBoxPos) {
  return shapePosX > scoreBoxPos.right || shapePosY > scoreBoxPos.bottom;
}
