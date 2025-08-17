export function drawCylinder() {
  const r = 0.8, h = 2.2;
  const g = new THREE.CylinderGeometry(r, r, h, 48, 1, false);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}