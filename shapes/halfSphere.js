export function createHalfSphere(r) {
  const geometry = new THREE.SphereGeometry(r, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcHalfSphere(r) {
  const PI = Math.PI;
  return {
    lateralArea: 2 * PI * r * r,
    totalArea: 3 * PI * r * r,
    volume: (2 / 3) * PI * r ** 3
  };
}
