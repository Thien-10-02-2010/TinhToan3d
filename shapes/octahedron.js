export function createOctahedron(a) {
  const geometry = new THREE.OctahedronGeometry(a / Math.sqrt(2));
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcOctahedron(a) {
  const area = 2 * Math.sqrt(3) * a * a;
  const volume = (1 / 3) * Math.sqrt(2) * a * a * a;
  return {
    lateralArea: area,
    totalArea: area,
    volume: volume
  };
}
