export function createTriangularPrism(a, h, l) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(a, 0);
  shape.lineTo(a / 2, h);
  shape.lineTo(0, 0);

  const extrudeSettings = { depth: l, bevelEnabled: false };
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcTriangularPrism(a, h, l) {
  const baseArea = 0.5 * a * h;
  const lateralArea = (a + 2 * Math.sqrt((a / 2) ** 2 + h ** 2)) * l;
  return {
    lateralArea: lateralArea,
    totalArea: 2 * baseArea + lateralArea,
    volume: baseArea * l
  };
}
