export function createPentagonPrism(a, h) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * 2 * Math.PI;
    shape.lineTo(Math.cos(angle) * a, Math.sin(angle) * a);
  }
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false });
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcPentagonPrism(a, h) {
  const baseArea = (5 / 4) * a * a * (1 / Math.tan(Math.PI / 5));
  const perimeter = 5 * a;
  return {
    lateralArea: perimeter * h,
    totalArea: 2 * baseArea + perimeter * h,
    volume: baseArea * h
  };
}
