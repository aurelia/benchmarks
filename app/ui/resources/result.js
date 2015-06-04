import {customAttribute, inject} from 'aurelia-framework';

@customAttribute('result')
@inject(Element)
export class Result {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue) {

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
