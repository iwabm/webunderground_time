import {
  Scene
} from 'three';
import { OrbitControls } from './jsm/controls/OrbitControls.js';

import { timeFormat } from './utils/functions.js';
import { resizeCanvas } from './utils/events.js';

import Debug from './utils/Debug.js';
import Camera from './utils/Camera.js';
import Renderer from './utils/Renderer.js';

import Sphere from './objects/Sphere.js';
// import Flow from './objects/Flow.js';

import Color from './data/color.js';
// import Video from './data/video.js';?

/* -------- PROJECT -------- */
let config    = {
                  debug: process.env.NODE_ENV == 'development',
                  date: false
                };
let time;
let width     = window.innerWidth;
let height    = window.innerHeight;

/* -------- SET UP THREE.JS -------- */
let container = document.body;
let scene     = new Scene();
global.camera = new Camera(width,height);
let renderer  = new Renderer(container);
let controls  = new OrbitControls(camera, renderer.domElement);
let context   = {
                  container: container,
                  camera: camera,
                  scene:  scene,
                  renderer: renderer
                };
let debug     = new Debug(context, config.debug);

/* -------- OBJECTS -------- */
let sphere = new Sphere( context );
// let flow   = new Flow ( context );

let color = new Color( context );

// let video = new Video( context );

/* -------- START -------- */
renderer.setup();
camera.setup();
debug.setup();

sphere.setup();

// flow.setup();

color.setup();
// video.setup();


/* -------- ANIMATION LOOP -------- */
function update() {

  /* Tick Tock */
  let t = config.date || new Date();
  time  = timeFormat(t);

  requestAnimationFrame(update);
  renderer.render(scene, camera);

  // flow.update();

  sphere.mesh.position.x = Math.sin(time.now * 0.001) * 20;

  // console.log(time.now);
  // sphere.add('x',0.1);
  //
  // sphere.beep(this);

  // color.update(time);
  debug.update(time);
  controls.update();
}
update();

/* -------- EVENT LISTENERS -------- */
window.addEventListener('resize', ()=>{
  width = window.innerWidth, height = window.innerHeight;
  resizeCanvas(camera, renderer, width, height);
}, false);
