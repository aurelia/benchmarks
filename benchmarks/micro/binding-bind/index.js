import {
  ObserverLocator,
  DirtyChecker,
  EventManager,
  Parser,
  BindingExpression,
  bindingMode
} from 'aurelia-binding';
import {TaskQueue} from 'aurelia-task-queue';

var parser = new Parser(),
    observerLocator = new ObserverLocator(new TaskQueue(), new EventManager(), new DirtyChecker(), []),
    sourceExpressions = [
      parser.parse('memberAccessExpression'),
      parser.parse('accessKeyedExpression[0]'),
      parser.parse('accessKeyedExpression[0].and.a.path.expression'),
      parser.parse('a.path.expression'),
      parser.parse('a ? conditional : expression'),
      parser.parse('another ? more.complex : conditional[0].expression'),
      parser.parse('a | converter:expression'),
      parser.parse('another.more[0].complex | converter:expression:0'),  
    ],
    modes = [bindingMode.oneTime, bindingMode.oneWay, bindingMode.twoWay],
    bindingExpressions = [],
    i = sourceExpressions.length,
    j,
    converter = { fromView: value => value, toView: value => value };

function getSource() {
  return {
    memberAccessExpression: 'hello world',
    accessKeyedExpression: [{ and: { a: { path: { expression: 'hello world' } } } }],
    a: { path: { expression: 'hello world' } },
    conditional: [{ expression: 'hello world' }],
    expression: 'hello world',
    another: { more: [{ complex: 'hello world' }] },
    more: { complex: 'hello world' },  
  };
}

while(i--) {
  j = modes.length;
  while(j--) {
    bindingExpressions.push(
      new BindingExpression(
        observerLocator,
        'value', // view property
        sourceExpressions[i],
        modes[j],
        name => converter,
        undefined))
  }
}

export default deferred => {  
	var binding, view, source;
  i = bindingExpressions.length;
  while(i--) {
    view = document.createElement('input');
    source = getSource();
    binding = bindingExpressions[i].createBinding(view);
    binding.bind(source);
    binding.unbind();
  }
  deferred.resolve();
};