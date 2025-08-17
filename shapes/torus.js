export function drawTorus() {
  const R = 1.8, r = 0.45;
  const g = new THREE.TorusGeometry(R, r, 24, 72);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}