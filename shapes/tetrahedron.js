export function drawTetrahedron() {
  const a = 1.6;
  const g = new THREE.TetrahedronGeometry(a);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}