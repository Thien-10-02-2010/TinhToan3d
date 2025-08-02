export function createCylinder(r, h) {
  const geometry = new THREE.CylinderGeometry(r, r, h, 64);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcCylinder(r, h) {
  const PI = Math.PI;
  return {
    lateralArea: 2 * PI * r * h,
    totalArea: 2 * PI * r * (h + r),
    volume: PI * r * r * h
  };
}
