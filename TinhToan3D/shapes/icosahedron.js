export function drawIcosahedron() {
  const size = 1.1;
  const g = new THREE.IcosahedronGeometry(size);
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  return new THREE.Mesh(g, m);
}