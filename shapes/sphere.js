export function drawSphere() {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshNormalMaterial({ wireframe: true });
    return new THREE.Mesh(geometry, material);
}