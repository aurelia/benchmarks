import {TemplatingBindingLanguage} from 'aurelia-templating-binding';

var parser = { parse: expression => null },
    observerLocator = { getObserver: () => null },
    syntaxInterpreter = {},
    language = new TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter),
    resources = { valueConverterLookupFunction: () => null },
    expressions = [
      '${name}',
      '${\'foo\\\'\'}',
      '${name}',
      '${\'name\'}',
      '${\'name\\\'\'}',
      '${"name"}',
      '${"name\\\""}',
      '\\${name}',
      '\\\\${"name"}',
      'foo${name}baz',
      ' ${name} ',
      '\'${name}\'',
      '"${name}"',
      'foo bar baz',
      '${foo.bar.baz}',
      '${ name }',
      '${name | foo}',
      '${name | foo:bar}',
      '${name|test:{}}',
      '${name|test:\'{}\'}',
      '${name | test: { foo: 4, bar, 9 } }',
      'foo ${name | test: { foo: 4, bar, 9 } } bar',
      '${firstName}${lastName}',
      ' ${firstName} ${lastName} ',
      '\\ ${foo}\\',
    ];

export default deferred => {
  var i = expressions.length, j, expression;
  while(i--) {
    expression = expressions[i];
    j = 10000;
    while(j--) {
      language.parseContent(resources, 'textContent', expression);
    }
  }
  deferred.resolve();
}
