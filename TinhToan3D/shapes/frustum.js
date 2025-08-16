export function drawFrustum() {
  const R1 = 1.2, R2 = 0.6, h = 2.0;
  const g = new THREE.CylinderGeometry(R2, R1, h, 48, 1, false);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}