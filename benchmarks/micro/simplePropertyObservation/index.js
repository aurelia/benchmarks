import { TemplatingBindingLanguage, SyntaxInterpreter } from 'aurelia-templating-binding';
import { Parser, EventManager } from 'aurelia-framework'

let observerLocator = { getObserver: () => null };
let resources = { valueConverterLookupFunction: () => null };

let expressions = [];

for(let i = 0; i < 1000; i++) {
    expressions.push("${name" + i + "}");
}

export default deferred => {

    let parser = new Parser();
    let eventManager = new EventManager();
    let interpreter = new SyntaxInterpreter(parser, observerLocator, eventManager);
    let language = new TemplatingBindingLanguage(parser, observerLocator, interpreter);
    expressions.forEach(e => language.parseContent(resources, 'textContent', e));

    deferred.resolve();
};
