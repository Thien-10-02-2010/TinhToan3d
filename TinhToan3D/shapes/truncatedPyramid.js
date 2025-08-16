export function drawTruncatedPyramid() {
  const a1 = 2.2, a2 = 1.2, h = 2.0;
  const r1 = a1 / Math.SQRT2;
  const r2 = a2 / Math.SQRT2;
  const g = new THREE.CylinderGeometry(r2, r1, h, 4, 1, false);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}