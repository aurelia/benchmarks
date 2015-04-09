import {Behavior} from 'aurelia-templating';

export class Result {

  static inject() { return [Element]; }

  static metadata() {
      return Behavior
                .attachedBehavior("result")
                .withProperty("result", "resultChanged");
  }

  constructor(element) {
    this.element = element;
  }

  resultChanged(newValue) {

      let goodResult = ['alert', 'alert-info', 'fa', 'fa-arrow-circle-o-up'];
      let badResult = ['alert', 'alert-danger', 'fa', 'fa-arrow-circle-o-down'];

      goodResult.forEach(n  => this.element.classList.remove(n));
      badResult.forEach(n => this.element.classList.remove(n));


      if(newValue > 0) {
          goodResult.forEach(n => this.element.classList.add(n));
      }
      else if(newValue < 0){
          badResult.forEach(n => this.element.classList.add(n));
      }
  }
}
