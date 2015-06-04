import {customAttribute, inject} from 'aurelia-framework';

@customAttribute('status')
@inject(Element)
export class Status {
  constructor(element) {
    this.element = element;
    this.element.classList.add('fa');
    this.element.classList.add('fa-circle-o-notch');
  }

  valueChanged(newValue){
    switch(newValue){
        case 'running':
            this.element.classList.add('fa-spin')
            break;
        default:
            this.element.classList.remove('fa-spin');
    }
  }
}
