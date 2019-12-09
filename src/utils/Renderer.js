import { WebGLRenderer } from 'three';

export default class Renderer extends WebGLRenderer {
  constructor( _c ){
    super({ antialias: true, alpha: true });
    this.container = _c;
  }
  setup(){

    this.setPixelRatio(window.devicePixelRatio);
    this.setSize(window.innerWidth, window.innerHeight);
    this.setClearColor(0x00ff00);
    this.gammaOutput = true;

    // add this renderer to our container
    this.container.appendChild(this.domElement);

  }
}
