export function createPyramid(a, h) {
  const geometry = new THREE.CylinderGeometry(0, a / Math.sqrt(2), h, 4, 1);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcPyramid(a, h) {
  const baseArea = a * a;
  const slantHeight = Math.sqrt((a / 2) ** 2 + h ** 2);
  const lateralArea = 2 * a * slantHeight;
  return {
    lateralArea: lateralArea,
    totalArea: lateralArea + baseArea,
    volume: (1 / 3) * baseArea * h
  };
}
