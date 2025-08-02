export function createCube(a) {
  const geometry = new THREE.BoxGeometry(a, a, a);
  const material = new THREE.MeshNormalMaterial({ wireframe: false });
  return new THREE.Mesh(geometry, material);
}

export function calcCube(a) {
  const area = 6 * a * a;
  const volume = a ** 3;
  return {
    lateralArea: 4 * a * a,
    totalArea: area,
    volume: volume
  };
}
