export function createBox(length, width, height) {
  const geometry = new THREE.BoxGeometry(length, height, width);
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

export function calcBox(length, width, height) {
  return {
    lateralArea: 2 * height * (length + width),
    totalArea: 2 * (length * width + length * height + width * height),
    volume: length * width * height
  };
}
