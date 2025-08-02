export function createSlantCylinder(r, h) {
  const geometry = new THREE.CylinderGeometry(r, r, h, 64);
  geometry.rotateX(Math.PI / 6); // nghiêng hình
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcSlantCylinder(r, h) {
  const PI = Math.PI;
  return {
    lateralArea: 2 * PI * r * h,
    totalArea: 2 * PI * r * (h + r),
    volume: PI * r * r * h
  };
}
