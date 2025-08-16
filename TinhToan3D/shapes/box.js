export function drawBox() {
    const geometry = new THREE.BoxGeometry(2, 1, 1);
    const material = new THREE.MeshNormalMaterial({ wireframe: true });
    return new THREE.Mesh(geometry, material);
}