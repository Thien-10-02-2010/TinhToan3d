export function createDodecahedron(a) {
  const geometry = new THREE.DodecahedronGeometry(a);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcDodecahedron(a) {
  const area = 3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * a * a;
  const volume = (1 / 4) * (15 + 7 * Math.sqrt(5)) * a ** 3;
  return {
    lateralArea: area,
    totalArea: area,
    volume: volume
  };
}
