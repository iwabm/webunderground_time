import * as THREE from 'three';
/*

    Flowing Lines Script

*/

export default class Flow {
  constructor( _context ){

    function CustomSinCurve ( scale ) {
	     THREE.Curve.call( this );
       this.scale = ( scale === undefined ) ? 1 : scale;
    }

    CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
    CustomSinCurve.prototype.constructor = CustomSinCurve;

    CustomSinCurve.prototype.getPoint = function ( t ) {
      var tx = t * 3 - 1.5;
      var ty = Math.sin( 2 * Math.PI * t );
      var tz = 0;
      return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
    };


    this.scene = _context.scene;

    this.geometry = new THREE.TubeBufferGeometry();
    this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    this.mesh     = new THREE.Mesh( this.geometry, this.material );

  }

  setup(){
    this.scene.add( this.mesh );
  }

  update(){

  }
}
