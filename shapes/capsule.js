export function drawCapsule() {
  const r = 0.5, L = 2.0;
  const cyl = new THREE.CylinderGeometry(r, r, L, 32, 1, false);
  const top = new THREE.SphereGeometry(r, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const bot = new THREE.SphereGeometry(r, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
  top.translate(0,  L/2, 0);
  bot.translate(0, -L/2, 0);
  const group = new THREE.Group();
  const m = new THREE.MeshNormalMaterial({ wireframe: true });
  group.add(new THREE.Mesh(cyl, m));
  group.add(new THREE.Mesh(top, m));
  group.add(new THREE.Mesh(bot, m));
  return group;
}