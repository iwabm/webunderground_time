/*
    File for color scale
*/

import { timeFormat } from '../utils/functions.js';

export default class Color{
  constructor( _context ){
    this.context = _context;
  }

  setup() {
    let t = new Date();
    let time  = timeFormat(t);
    // let col1 = '0x' + time.hour + time.min + time.sec;
    // console.log(col1);
    var color_top, color_bottom;

    if (0<= time.hour <= 6 || 18 <= time.hour <= 23) {
      color_top = "#000000";
      color_bottom = "#203090";
      } else if (time.hour==7){
        color_top= "#3A479B";
        color_bottom = "#E5C59A";
      } else if (8 <= time.hour <= 16){
        color_top = "#4F75F5";
        color_bottom = "#B8B9D6";
      } else if(time.hour == 17){
        color_top = "#3A315C";
        color_bottom = "#D69A82";
      }

    console.log(color_top, + " " + color_bottom);

    this.context.renderer.setClearColor(0xff00ff, 1);
    const can = document.querySelector('canvas');
    // can.style.background = 'linear-gradient(to bottom, ' + color_top + ' 0%, ' + color_bottom + ' 100%)';
    // can.style.background = 'linear-gradient(to bottom, ' + color_top + ' 0%, ' + color_bottom + ' 100%)';
  }

  // update( time ){
  //   // let col1 = '0x' + time.hour + time.min + time.sec;
  //   // console.log(col1);
  //
  //   var color_top, color_bottom;
  //
  //   if (0<= time.hour <= 6 || 18 <= time.hour <= 23) {
  //     color_top = #000000;
  //     color_bottom = #203090;
  //     } else if (time.hour==7){
  //       color_top= #3A479B;
  //       color_bottom = #E5C59A;
  //     } else if (8 <= time.hour <= 16){
  //       color_top =#4F75F5;
  //       color_bottom =#B8B9D6;
  //     } else (time.hour == 17){
  //       color_top = #3A315C;
  //       color_bottom = #D69A82;
  //     }
  //
  //
  //   this.context.renderer.setClearColor(0xffffff, 0);
  //   const can = document.querySelector('canvas');
  //   can.style.background = 'linear-gradient(to bottom,' + color_top + ' 0%,' + color_bottom + '100%)';
  //   // can.style.background = col1;
  // }

}
