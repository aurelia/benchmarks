import {inject, customElement, bindable, noView, processContent} from 'aurelia-framework';
import Chartist from 'chartist';

@customElement('chart')
@inject(Element)
@noView()
@processContent(false)
export class Chart {
  @bindable data;
  @bindable options;
  @bindable type;
  chart = null;

  constructor(element) {
    this.element = element;
  }

  propertyChanged(name, newValue, oldValue) {
    if (this.chart) {
      this.chart.detach();
      this.chart = null;
    }
    if (this.data && this.options && this.type) {
      this.chart = Chartist[this.type](this.element, this.data, this.options);
    }
  }
}
