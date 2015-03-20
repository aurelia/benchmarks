System.register(["./test"], function (_export) {
  "use strict";

  var Test, _prototypeProperties, _get, _inherits, _classCallCheck, MicroTest;
  return {
    setters: [function (_test) {
      Test = _test.Test;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      MicroTest = _export("MicroTest", (function (Test) {
        function MicroTest(name) {
          _classCallCheck(this, MicroTest);

          _get(Object.getPrototypeOf(MicroTest.prototype), "constructor", this).call(this, name);
          this._importComplete = System["import"]("benchmarks/micro/" + name + "/index").then(function (module) {
            return module["default"];
          });
        }

        _inherits(MicroTest, Test);

        _prototypeProperties(MicroTest, null, {
          run: {
            value: function run() {
              var _this = this;


              return this._importComplete.then(function (testFn) {
                var testRunner = function (resolve, reject) {
                  var bench = new Benchmark(_this.name, {
                    defer: true,
                    fn: testFn,
                    onComplete: function () {
                      _this._status = "complete";
                      _this._elapsed = bench.times.period;
                      resolve(_this);
                    }
                  });
                  _this._status = "running";
                  bench.run({ async: true });
                };

                return new Promise(testRunner);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return MicroTest;
      })(Test));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm1hbmNlVGVzdC9taWNyb1Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsSUFBSSwwREFFQyxTQUFTOzs7QUFGZCxVQUFJLFNBQUosSUFBSTs7Ozs7Ozs7Ozs7QUFFQyxlQUFTLG1DQUFTLElBQUk7QUFFcEIsaUJBRkYsU0FBUyxDQUVOLElBQUk7Z0NBRlAsU0FBUzs7QUFHZCxxQ0FISyxTQUFTLDZDQUdSLElBQUksRUFBRTtBQUNaLGNBQUksQ0FBQyxlQUFlLEdBQ2hCLE1BQU0sVUFBTyx1QkFBcUIsSUFBSSxZQUFTLENBQ3hDLElBQUksQ0FBQyxVQUFBLE1BQU07bUJBQUksTUFBTSxXQUFRO1dBQUEsQ0FBQyxDQUFDO1NBQzdDOztrQkFQUSxTQUFTLEVBQVMsSUFBSTs7NkJBQXRCLFNBQVM7QUFTbEIsYUFBRzttQkFBQSxlQUFHOzs7O0FBRUYscUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFFdkMsb0JBQUksVUFBVSxHQUFHLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNsQyxzQkFBSSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsTUFBSyxJQUFJLEVBQUU7QUFDN0IseUJBQUssRUFBRSxJQUFJO0FBQ1gsc0JBQUUsRUFBRSxNQUFNO0FBQ1YsOEJBQVUsRUFBRSxZQUFNO0FBQ2QsNEJBQUssT0FBTyxHQUFHLFVBQVUsQ0FBQztBQUMxQiw0QkFBSyxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDbkMsNkJBQU8sT0FBTSxDQUFDO3FCQUNqQjttQkFDSixDQUFDLENBQUM7QUFDUCx3QkFBSyxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLHVCQUFLLENBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7aUJBQzNCLENBQUM7O0FBRUYsdUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7ZUFDbEMsQ0FBQyxDQUFDO2FBQ047Ozs7OztlQTdCUSxTQUFTO1NBQVMsSUFBSSIsImZpbGUiOiJwZXJmb3JtYW5jZVRlc3QvbWljcm9UZXN0LmpzIiwic291cmNlUm9vdCI6Ii9hcHAvIn0=