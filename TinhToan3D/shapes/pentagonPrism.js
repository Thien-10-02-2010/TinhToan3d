export function drawPentagonPrism() {
  const a = 1.1, L = 2.8;
  const R = a / (2 * Math.sin(Math.PI / 5));
  const shape = new THREE.Shape();
  for (let i = 0; i < 5; i++) {
    const ang = Math.PI / 2 + i * 2 * Math.PI / 5;
    const x = R * Math.cos(ang), y = R * Math.sin(ang);
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  }
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth: L, bevelEnabled: false });
  g.translate(0, 0, -L/2);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}