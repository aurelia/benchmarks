import {Parser} from 'aurelia-framework';

var parser = new Parser(),
    simple = 'memberAccessExpresion',
    complex = 'some.complex.expression[that](is, really, complex).and.expensive[3].to.parse ? "and" : "long" | withAConverter:and:parameters';
parser.parse(simple);
parser.parse(complex);

export default deferred => {
  var i = 100;
  while(i--) {
    parser.parse(simple);
    parser.parse(complex);
  }
  deferred.resolve();
};
