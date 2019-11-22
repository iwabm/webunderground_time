import * as THREE from 'three';

export default class Renderer extends THREE.WebGLRenderer {
  constructor( _options, _c ){
    super( _options );
    this.container = _c;
  }
  setup(){

    this.setPixelRatio(window.devicePixelRatio);
    this.setSize(window.innerWidth, window.innerHeight);
    this.setClearColor(0x000000);
    this.gammaOutput = true;

    // add this renderer to our container
    this.container.appendChild(this.domElement);

  }
}
