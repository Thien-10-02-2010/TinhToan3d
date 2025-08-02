export function createCone(r, h) {
  const geometry = new THREE.ConeGeometry(r, h, 64);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcCone(r, h) {
  const PI = Math.PI;
  const l = Math.sqrt(h * h + r * r); // đường sinh
  return {
    lateralArea: PI * r * l,
    totalArea: PI * r * (l + r),
    volume: (1 / 3) * PI * r * r * h
  };
}
