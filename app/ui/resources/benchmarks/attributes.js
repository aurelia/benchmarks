import {customAttribute, inject} from 'aurelia-framework';

@inject(Element)
class Attr {
	constructor(element) {
		this.element = element;
	}
	
	attached() {
		console.log(`attached to ${this.element.outerHTML}`);
	}
}

@customAttribute('foo')
export class Foo extends Attr {}

@customAttribute('bar')
export class Bar extends Attr {}

@customAttribute('baz')
export class Baz extends Attr {}