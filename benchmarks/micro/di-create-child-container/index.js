import {Container} from 'aurelia-framework';

export default deferred => {
  var container = new Container(), current, i = 10000, j;
  while(i--) {
    current = container.createChild();
    j = 50;
    while(j--) {
      current = current.createChild();
    }
  }
  deferred.resolve();  
};
