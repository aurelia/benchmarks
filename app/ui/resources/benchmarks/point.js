import {customElement, bindable} from 'aurelia-framework';

@customElement('point')
export class Point {
	@bindable x;
	@bindable y;
}