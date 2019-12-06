import * as THREE from 'three';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import Stats from './jsm/libs/stats.module.js';

import timeFormat from './utils/timeFormat.js';
import { TimeDebug } from './utils/debug.js';
import { resizeCanvas } from './utils/events.js';

import Renderer from './utils/Renderer.js';

/* -------- PROJECT -------- */
let config    = { debug: true };
let time      = {};
let width     = window.innerWidth;
let height    = window.innerHeight;

/* -------- SET UP THREE.JS -------- */
let container = document.body;
let scene     = new THREE.Scene();
let camera    = new THREE.PerspectiveCamera(
                   60,             // Field of view
                   width / height, // Aspect ratio
                   0.1,            // Near clipping pane
                   1000            // Far clipping pane
               );
let renderer  = new Renderer({
                   antialias: true
                }, container );
let controls  = new OrbitControls(camera, renderer.domElement);
let stats     = new Stats();
let debug     = new TimeDebug();

/* -------- START -------- */
renderer.setup();

camera.position.set(0,0,-30);

if( config.debug ){
   container.appendChild(stats.dom);
   container.appendChild(debug.dom);
}

let geo    = new THREE.SphereBufferGeometry(10,10,10);
let mat    = new THREE.MeshBasicMaterial({
  color: 0xff00ff
});
let sphere = new THREE.Mesh(geo, mat);

scene.add(sphere);

/* -------- ANIMATION LOOP -------- */
function update() {
  requestAnimationFrame(update);
  renderer.render(scene, camera);

  if( config.debug ){
    stats.update();
    debug.update(time.string);
  }
  controls.update();
}
update();

/* -------- TICK TOCK -------- */
setInterval(() => {
  let t = new Date();
  time = timeFormat(t);
}, 100);

/* -------- EVENT LISTENERS -------- */
window.addEventListener('resize', ()=>{
  width = window.innerWidth, height = window.innerHeight;
  resizeCanvas(camera, renderer, width, height);
}, false);
