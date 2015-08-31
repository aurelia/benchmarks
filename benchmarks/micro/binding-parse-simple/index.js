import {Parser} from 'aurelia-framework';

var expressions = [], i;
for(i = 0; i < 100; i++) {
  expressions.push('memberAccessExpression' + i);
}

export default deferred => {
  var parser = new Parser(), expression;
  i = expressions.length;
  while(i--) {
    expression = expressions[i];
    parser.parse(expression);
  }
  deferred.resolve();
};
