import {Behavior} from 'aurelia-templating';

export class Status {

  static inject() { return [Element]; }

  static metadata() {
      return Behavior
                .attachedBehavior("status")
                .withProperty("status", "statusChanged");
  }

  constructor(element) {
    this.element = element;
    this.element.classList.add('fa');
    this.element.classList.add('fa-circle-o-notch');
  }

  statusChanged(newValue){
    switch(newValue){
        case 'running':
            this.element.classList.add('fa-spin')
            break;
        default:
            this.element.classList.remove('fa-spin');
    }
  }
}
