export function createSphere(radius) {
  const geo = new THREE.SphereGeometry(radius, 32, 32);
  const mat = new THREE.MeshBasicMaterial({ color: 0xc4ffa0, wireframe: false });
  const sphere = new THREE.Mesh(geo, mat);

  const edges = new THREE.EdgesGeometry(geo);
  const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000 }));
  sphere.add(line);

  return sphere;
}
