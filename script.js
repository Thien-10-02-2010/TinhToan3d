import * as shapes from './shapes/allShapes.js';

const shapeSelect = document.getElementById('shapeSelect');
const inputFields = document.getElementById('inputFields');
const drawBtn = document.getElementById('drawBtn');
const resultsDiv = document.getElementById('results');

let scene, camera, renderer, mesh;

function initScene() {
  const canvas = document.getElementById("canvas3D");
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(400, 400);

  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  if (mesh) mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

function clearScene() {
  if (mesh) {
    scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
    mesh = null;
  }
}

function createInput(name, label) {
  return `
    <label for="${name}">${label}</label>
    <input type="number" id="${name}" required />
  `;
}

const shapeInputs = {
  cube: ['a'],
  box: ['length', 'width', 'height'],
  sphere: ['r'],
  cylinder: ['r', 'h'],
  cone: ['r', 'h'],
  pyramid: ['a', 'h'],
  torus: ['R', 'r'],
  octahedron: ['a'],
  dodecahedron: ['a'],
  icosahedron: ['a'],
  ellipsoid: ['a', 'b', 'c'],
  capsule: ['r', 'h'],
  halfsphere: ['r'],
  triangularPrism: ['a', 'h', 'l'],
  hexagonalPrism: ['a', 'h'],
  pentagonPrism: ['a', 'h'],
  slantcylinder: ['r', 'h'],
  pentagonPyramid: ['a', 'h'],
  trapezoidPrism: ['a', 'b', 'h', 'l']
};

shapeSelect.addEventListener("change", () => {
  const shape = shapeSelect.value;
  inputFields.innerHTML = "";

  if (!shapeInputs[shape]) return;

  shapeInputs[shape].forEach(param => {
    const label = param.toUpperCase();
    inputFields.innerHTML += createInput(param, label);
  });
});

drawBtn.addEventListener("click", () => {
  const shape = shapeSelect.value;
  if (!shape) return;

  const params = shapeInputs[shape].map(id => {
    const val = parseFloat(document.getElementById(id).value);
    if (isNaN(val) || val <= 0) {
      alert(`Giá trị "${id}" không hợp lệ`);
      throw new Error("Invalid input");
    }
    return val;
  });

  clearScene();

  try {
    const createFunc = shapes[`create${capitalize(shape)}`];
    const calcFunc = shapes[`calc${capitalize(shape)}`];

    if (!createFunc || !calcFunc) {
      alert("Hình chưa được hỗ trợ!");
      return;
    }

    mesh = createFunc(...params);
    scene.add(mesh);

    const result = calcFunc(...params);
    resultsDiv.innerHTML = `
      <p><strong>Diện tích xung quanh:</strong> ${result.lateralArea.toFixed(2)}</p>
      <p><strong>Diện tích toàn phần:</strong> ${result.totalArea.toFixed(2)}</p>
      <p><strong>Thể tích:</strong> ${result.volume.toFixed(2)}</p>
    `;
  } catch (e) {
    console.error(e);
  }
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

initScene();
