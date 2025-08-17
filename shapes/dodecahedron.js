export function drawDodecahedron() {
  const size = 1.05;
  const g = new THREE.DodecahedronGeometry(size);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}