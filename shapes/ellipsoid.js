export function createEllipsoid(a, b, c) {
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  geometry.scale(a, b, c);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcEllipsoid(a, b, c) {
  const volume = (4 / 3) * Math.PI * a * b * c;

  // Approximate surface area (Knud Thomsen formula)
  const p = 1.6075;
  const area = 4 * Math.PI * Math.pow((Math.pow(a * b, p) + Math.pow(a * c, p) + Math.pow(b * c, p)) / 3, 1 / p);

  return {
    lateralArea: area,
    totalArea: area,
    volume: volume
  };
}
