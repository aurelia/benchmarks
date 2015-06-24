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
    return `${firstName} ${lastName}`;
  }

  get adapter() {
    return 'hello world';
  }
}

var locator = new ObserverLocator(new TaskQueue(), new EventManager(), new DirtyChecker(), [new MockAdapter()]);

export default deferred => {
  var i = 10000, object;
  while(i--) {
    object = new Test();
    locator.getObserver(object, 'simple');
    locator.getObserver(object, 'getterSetter');
    locator.getObserver(object, 'computed');
    locator.getObserver(object, 'adapter');
    object = document.createElement('input');
    locator.getObserver(object, 'value');
    locator.getObserver(object, 'checked');
    locator.getObserver(object, 'class');
    locator.getObserver(object, 'css');
  }
  deferred.resolve();
};
