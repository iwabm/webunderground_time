/*
    File for color scale
*/

import { timeFormat } from '../utils/functions.js';

export default class Color{
  constructor( _context ){
    this.context = _context;
  }

  setup() {
    // let time = t;
    // let hour = time.hour;
    this.context.renderer.setClearColor(0x00ffff);
  }
}
//
// exports function setBackgroundColor( t ){
// 	let time = t;
// 	let hour = time.hour;
// 	let hourColor = {
// 		'01' : '#00FFFF',
// 		'02' : '#00FFFF',
// 		'03' : '#00FFFF',
// 		'04' : '#00FFFF',
// 		'05' : '#00FFFF',
// 		'06' : '#00FFFF',
// 		'07' : '#00FFFF',
// 		'08' : '#00FFFF',
// 		'09' : '#00FFFF',
// 		'10' : '#00FFFF',
// 		'11' : '#00FFFF',
// 		'12' : '#00FFFF',
// 		'13' : '#00FFFF',
// 		'14' : '#00FFFF',
// 		'15' : '#00FFFF',
// 		'16' : '#00FFFF',
// 		'17' : '#00FFFF',
// 		'18' : '#00FFFF',
// 		'19' : '#00FFFF',
// 		'20' : '#00FFFF',
// 		'21' : '#00FFFF',
// 		'22' : '#00FFFF',
// 		'23' : '#00FFFF',
// 		'24' : '#00FFFF'
// 	};
// 	let color1 = 'rgba(0,1,0,1)';
// 	let color2 = 'rgba(1,0,0,1)';
// 	document.body.style.background = `linear-gradient(${color1}, ${color2})`;
// }
