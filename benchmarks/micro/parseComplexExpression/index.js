import {Parser} from 'aurelia-framework';

export default deferred => {
    let parser = new Parser();
    let result = parser.parse("contactForm.controls['firstName'].value[$index].foo.baz.boo.qux.dux.nux.cat.dog.blah");
    deferred.resolve();
};
