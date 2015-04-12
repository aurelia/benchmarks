import {Parser} from 'aurelia-framework';

let expressions = [];
for(let i = 0; i < 10000; i++) {
    expressions.push("contactForm.controls['firstName'].value[$index].foo.baz.boo.qux.dux.nux.cat.dog.blah." + i);
}

export default deferred => {

    let parser = new Parser();
    expressions.forEach(e => parser.parse(e));
    deferred.resolve();
};
