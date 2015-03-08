export class StatusAttachedBehavior {

  static inject() { return [Element]; }

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
