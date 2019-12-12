/*
    File for color scale
*/

import { timeFormat } from '../utils/functions.js';

export default class Video{
  constructor( _context ){
    this.context = _context;
  }

  setup() {
    var video = document.getElementById( 'video' );

    var texture = new THREE.VideoTexture( video );
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
  }
}
