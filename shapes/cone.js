export function drawCone() {
  const r = 0.9, h = 2.2;
  const g = new THREE.ConeGeometry(r, h, 48, 1, false);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}