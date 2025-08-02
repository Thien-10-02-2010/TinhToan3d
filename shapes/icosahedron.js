export function createIcosahedron(a) {
  const geometry = new THREE.IcosahedronGeometry(a);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcIcosahedron(a) {
  const area = 5 * Math.sqrt(3) * a * a;
  const volume = (5 / 12) * (3 + Math.sqrt(5)) * a ** 3;
  return {
    lateralArea: area,
    totalArea: area,
    volume: volume
  };
}
