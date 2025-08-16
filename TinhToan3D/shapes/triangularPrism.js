export function drawTriangularPrism() {
  const a = 1.4, L = 2.6;
  const h = Math.sqrt(3) / 2 * a;
  const shape = new THREE.Shape();
  shape.moveTo(-a/2, -h/3);
  shape.lineTo(a/2, -h/3);
  shape.lineTo(0, 2*h/3);
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth: L, bevelEnabled: false });
  g.translate(0, 0, -L/2);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}