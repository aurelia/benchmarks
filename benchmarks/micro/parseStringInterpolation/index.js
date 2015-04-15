import { TemplatingBindingLanguage } from 'aurelia-templating-binding';
import { Parser } from 'aurelia-framework'

let parser = new Parser();
let observerLocator = { getObserver: () => null };
let syntaxInterpreter = {};
let resources = { valueConverterLookupFunction: () => null };
let expressions = [];

for(let i = 0; i < 1000; i++) {
    expressions.push("${name" + i + "}");
}

export default deferred => {

    let language = new TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter);
    expressions.forEach(e => language.parseContent(resources, 'textContent', e));

    deferred.resolve();
};
