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
    container.registerSingleton(ctor);
  }
  // resolve.
  i = max;
  while(i--) {
    ctor = ctors[i];
    container.get(ctor);
  }

  deferred.resolve();
};
