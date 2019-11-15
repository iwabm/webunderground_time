import * as THREE from 'three';
import OrbitControls from './jsm/controls/OrbitControls.js';
import Stats from './jsm/libs/stats.module.js';

console.log('running');

// const message = document.getElementById("message");
//
// function time(t) {
//   let format = val => {
//     return val.toString().padStart(2, "0");
//   };
//   let h = format(t.getHours());
//   let m = format(t.getMinutes());
//   let s = format(t.getSeconds());
//   return `${h}:${m}:${s}`;
// }


let scene, camera, controls,
    ambient, point, loader,
    renderer, container, stats;

init();
animate();

function init() {
  scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		60, // Field of view
		window.innerWidth / window.innerHeight, // Aspect ratio
		0.1, // Near clipping pane
		1000 // Far clipping pane
	);
	// Reposition the camera
	camera.position.set(0, 30, 50);
	// Point the camera at a given coordinate
	// camera.lookAt(new THREE.Vector3(0, 15, 0));

	// // Add an ambient lights
	// ambient = new THREE.AmbientLight(0xffffff, 0.2);
	// scene.add(ambient);

	// // Add a point light that will cast shadows
	// point = new THREE.PointLight(0xffffff, 1);
	// point.position.set(25, 50, 25);
	// point.castShadow = true;
	// point.shadow.mapSize.width = 1024;
	// point.shadow.mapSize.height = 1024;
	// scene.add(point);

	// Create a renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });
	// Set size
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	// Set color
	renderer.setClearColor(0xf8a5c2);
	// renderer.gammaOutput = true;
	// Enable shadow mapping
	// renderer.shadowMap.enabled = true;
	// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	// Append to the document
	container = document.createElement('div');
	document.body.appendChild(container);
	document.body.appendChild(renderer.domElement);
	// Add resize listener
	// window.addEventListener('resize', onWindowResize, false);

  // Add orbit control
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, -0.2, -0.2);
  controls.update();

	// Enable FPS stats
	stats = new Stats();
	container.appendChild(stats.dom);
}

// function onWindowResize() {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// }

function animate() {
	requestAnimationFrame(animate);
	// Re-render scene
	renderer.render(scene, camera);
	// Update stats
	stats.update();
}


// setInterval(() => {
//   let t = new Date();
//   message.innerHTML = `${time(t)}`;
// }, 100);
