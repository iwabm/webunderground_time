/*

  Debugging Utilities

  In this file:
    1.  TimeDebug

*/
export class TimeDebug {

  constructor (){
    this.dom    = document.createElement('div');
    this.dom.id = 'debug';
  }

  update( time ){
    this.dom.innerHTML = time;
  }

  hide(){
    this.dom.style.display = 'none';
  }

  show(){
    this.dom.style.display = 'block';
  }

}
