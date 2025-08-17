import { allShapes } from './shapes/allShapes.js';

const viewer = document.getElementById('viewer');
const shapeSelect = document.getElementById('shapeSelect');
const drawBtn = document.getElementById('drawBtn');
const clearBtn = document.getElementById('clearBtn');

let scene, camera, renderer, mesh;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(500, 500);
    viewer.innerHTML = '';
    viewer.appendChild(renderer.domElement);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function fitCameraToObject(object) {
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());
    camera.position.copy(center.clone().add(new THREE.Vector3(size, size, size)));
    camera.lookAt(center);
}

function drawShape() {
    const id = shapeSelect.value;
    const shapeData = allShapes.find(s => s.id === id);
    if (!shapeData) return;
    if (mesh) scene.remove(mesh);
    mesh = shapeData.draw();
    scene.add(mesh);
    fitCameraToObject(mesh);
}

function clearScene() {
    if (mesh) {
        scene.remove(mesh);
        mesh = null;
    }
}

allShapes.forEach(shape => {
    const opt = document.createElement('option');
    opt.value = shape.id;
    opt.textContent = shape.name;
    shapeSelect.appendChild(opt);
});

drawBtn.addEventListener('click', drawShape);
clearBtn.addEventListener('click', clearScene);

init();
