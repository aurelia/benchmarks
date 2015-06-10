import {Container} from 'aurelia-framework';

var ctors = [], max = 50000, i = max;
while(i--) {
  ctors.push((function() { return () => null; })());
}

export default deferred => {
  var container = new Container(), ctor;
  // register.
  i = max;
  while(i--) {
    ctor = ctors[i];
    container.registerInstance(ctor, 'How much do you bench?');
  }
  // resolve.
  i = max;
  while(i--) {
    ctor = ctors[i];
    container.get(ctor);
  }

  deferred.resolve();
};
