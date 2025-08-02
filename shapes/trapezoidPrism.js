export function createTrapezoidPrism(a, b, h, l) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(a, 0);
  shape.lineTo((a + b) / 2, h);
  shape.lineTo((a - b) / 2, h);
  shape.lineTo(0, 0);

  const geometry = new THREE.ExtrudeGeometry(shape, { depth: l, bevelEnabled: false });
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcTrapezoidPrism(a, b, h, l) {
  const baseArea = ((a + b) / 2) * h;
  const perimeter = a + b + 2 * Math.sqrt(((a - b) / 2) ** 2 + h ** 2);
  return {
    lateralArea: perimeter * l,
    totalArea: 2 * baseArea + perimeter * l,
    volume: baseArea * l
  };
}
