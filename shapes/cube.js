export function drawCube() {
  const g = new THREE.BoxGeometry(1.6, 1.6, 1.6);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}