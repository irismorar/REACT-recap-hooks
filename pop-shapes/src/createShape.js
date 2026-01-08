export function createShape() {
  const shapes = ["circle", "square", "diamond"];

  return {
    id: crypto.randomUUID(),
    type: shapes[Math.ceil((Math.random() || 0.1) * shapes.length) - 1],
    x: Math.random() * (window.innerWidth - 80),
    y: Math.random() * (window.innerHeight - 80),
  };
}
