export function createHexagonalPrism(a, h) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * 2 * Math.PI;
    shape.lineTo(Math.cos(angle) * a, Math.sin(angle) * a);
  }
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false });
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcHexagonalPrism(a, h) {
  const baseArea = ((3 * Math.sqrt(3)) / 2) * a * a;
  const perimeter = 6 * a;
  return {
    lateralArea: perimeter * h,
    totalArea: 2 * baseArea + perimeter * h,
    volume: baseArea * h
  };
}
