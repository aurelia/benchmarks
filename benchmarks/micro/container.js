import {Container, Metadata, TransientRegistration} from 'aurelia-framework';

var ctors = [], metadataCtors = [], ctor, max = 10000, i = max;
while(i--) {
  ctor = (function() { return () => null; })();
  ctors.push(ctor);
  ctor = (function() { return () => null; })();
  Metadata.define('aurelia:registration', new TransientRegistration(), ctor);
  metadataCtors.push(ctor);
}

/**
* Create a container benchmark
* @param {Function} register - A function accepting a Container instance and a constructor function to perform the registration.
* @param {number} registerDepth - The child container depth to perform the registrations (default = 0).
* @param {number} resolveDepth - The child container depth to perform the container.get (default = 0).
*/
export function createBenchmark(register, registerDepth = 0, resolveDepth = 0, metadata = false) {
  return deferred => {
    var registerContainer, resolveContainer, ctor;

    registerContainer = resolveContainer = new Container();

    i = registerDepth;
    while(i--) {
      registerContainer = registerContainer.createChild();
    }

    i = resolveDepth;
    while(i--) {
      resolveContainer = resolveContainer.createChild();
    }

    i = max;
    while(i--) {
      ctor = metadata ? metadataCtors[i] : ctors[i];
      register(registerContainer, ctor);
    }

    i = max;
    while(i--) {
      ctor = metadata ? metadataCtors[i] : ctors[i];
      resolveContainer.get(ctor);
    }

    deferred.resolve();
  };
}
