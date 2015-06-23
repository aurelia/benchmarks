import {Parser} from 'aurelia-framework';

var expressions = [], i;

for(i = 0; i < 5000; i++) {
  expressions.push('a.path.expression' + i);
  expressions.push('accessKeyedExpression[' + i + ']');
  expressions.push('accessKeyedExpression[' + i + '].and.a.path.expression');
  expressions.push('callScopeExpression' + i + '()');
  expressions.push('callScopeExpression(' + i + ')');
  expressions.push('callMember.expression(' + i + ')');
  expressions.push('callMember.expression(' + i + ', true, false, 1, \'hello world\')');
  expressions.push('a' + i + ' ? conditional : expression');
  expressions.push('another ? more.complex : conditional[' + i + '].expression');
  expressions.push('a' + i + ' | converter:expression');
  expressions.push('another.more[' + i + '].complex | converter:expression:' + i);
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
