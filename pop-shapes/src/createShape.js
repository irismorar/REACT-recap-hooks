const shapeScoreValues = {
  circle: 3,
  square: 2,
  diamond: 1,
};

const SHAPE_TYPES = ["circle", "square", "diamond"];

export function createShape(scoreRef) {
  const type =
    SHAPE_TYPES[Math.ceil((Math.random() || 0.1) * SHAPE_TYPES.length) - 1];

  const scoreWidth = scoreRef.current.offsetWidth;
  const scoreHeight = scoreRef.current.offsetHeight;
  let x = Math.random() * (window.innerWidth - 80);
  let y = Math.random() * (window.innerHeight - 80);

  while (!isOutsideTheBox(x, y, scoreWidth, scoreHeight)) {
    x = Math.random() * (window.innerWidth - 80);
    y = Math.random() * (window.innerHeight - 80);
  }

  return {
    id: crypto.randomUUID(),
    type,
    x,
    y,
    scoreValue: shapeScoreValues[type],
  };
}

function isOutsideTheBox(shapePosX, shapePosY, scoreWidth, scoreHeight) {
  return shapePosX > scoreWidth || shapePosY > scoreHeight;
}
