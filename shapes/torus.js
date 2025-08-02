export function createTorus(R, r) {
  const geometry = new THREE.TorusGeometry(R, r, 32, 100);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcTorus(R, r) {
  const PI = Math.PI;
  return {
    lateralArea: 4 * PI * PI * R * r,
    totalArea: 4 * PI * PI * R * r,
    volume: 2 * PI * PI * R * r * r
  };
}
