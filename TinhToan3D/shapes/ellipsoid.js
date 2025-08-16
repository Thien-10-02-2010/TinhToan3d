export function drawEllipsoid() {
  const rx = 1.2, ry = 0.9, rz = 0.7;
  const g = new THREE.SphereGeometry(1, 32, 32);
  g.scale(rx, ry, rz);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}