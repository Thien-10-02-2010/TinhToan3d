export function drawPyramid() {
  const a = 1.8, h = 2.0;
  const baseRadius = a / Math.SQRT2;
  const g = new THREE.CylinderGeometry(0, baseRadius, h, 4, 1, false);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}