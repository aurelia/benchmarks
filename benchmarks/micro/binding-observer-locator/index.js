import {
  ObserverLocator,
  EventManager,
  DirtyChecker,
  TaskQueue,
  computedFrom
} from 'aurelia-framework';

class MockAdapter {
  handlesProperty(object, propertyName, descriptor) {
    return propertyName === 'adapter';
  }

  getObserver(object, propertyName, descriptor) {
    return {};
  }
}

class Test {
  simple = 'hello world';

  _getterSetter = 'hello world';
  get getterSetter() {
    return this._getterSetter;
  }
  set getterSetter(newValue) {
    this._getterSetter = newValue;
  }

  firstName = 'John';
  lastName = 'Doe';

  @computedFrom('firstName', 'lastName')
  get computed() {
    return `${this.firstName} ${this.lastName}`;
  }

  get adapter() {
    return 'hello world';
  }
}

var locator = new ObserverLocator(new TaskQueue(), new EventManager(), new DirtyChecker(), [new MockAdapter()]);

export default deferred => {
  var i = 10000, object, observer, cb = (newValue, oldValue) => {};
  while(i--) {
    object = new Test();
    observer = locator.getObserver(object, 'simple');
    observer.subscribe(cb)();
    observer = locator.getObserver(object, 'getterSetter');
    observer.subscribe(cb)();
    observer = locator.getObserver(object, 'computed');
    observer.subscribe(cb)();
    observer = locator.getObserver(object, 'adapter');
    observer = locator.getObserver(object, 'undefinedProperty');
    observer.subscribe(cb)();

    object = document.createElement('input');
    object.simple = 'hello world';
    Object.defineProperty(object, 'getterSetter', { get: () => null, set: newValue => {} });
    observer = locator.getObserver(object, 'value');
    observer.subscribe(cb)();
    observer = locator.getObserver(object, 'checked');
    observer.subscribe(cb)();
    observer = locator.getObserver(object, 'class');
    observer = locator.getObserver(object, 'css');
    observer = locator.getObserver(object, 'simple');
    observer.subscribe(cb)();
    observer = locator.getObserver(object, 'getterSetter');
    observer.subscribe(cb)();
    observer = locator.getObserver(object, 'undefinedProperty');
    observer.subscribe(cb)();
  }
  deferred.resolve();
};
