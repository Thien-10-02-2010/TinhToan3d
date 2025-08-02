export function createCapsule(r, h) {
  const geometry = new THREE.CapsuleGeometry(r, h, 32, 64);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcCapsule(r, h) {
  const PI = Math.PI;
  const cylinderHeight = h;
  return {
    lateralArea: 2 * PI * r * cylinderHeight + 4 * PI * r * r,
    totalArea: 2 * PI * r * cylinderHeight + 4 * PI * r * r,
    volume: PI * r * r * cylinderHeight + (4 / 3) * PI * r ** 3
  };
}
