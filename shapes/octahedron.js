export function drawOctahedron() {
  const size = 1.2;
  const g = new THREE.OctahedronGeometry(size);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}