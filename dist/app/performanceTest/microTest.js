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
              this._importComplete.then(function (testFn) {
                var bench = new Benchmark(_this.name, {
                  defer: true,
                  fn: testFn,
                  onComplete: function () {
                    _this._status = "complete";
                    _this._elapsed = bench.times.period;
                  }
                });
                _this._status = "running";
                bench.run({ async: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm1hbmNlVGVzdC9taWNyb1Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsSUFBSSwwREFFQyxTQUFTOzs7QUFGZCxVQUFJLFNBQUosSUFBSTs7Ozs7Ozs7Ozs7QUFFQyxlQUFTLG1DQUFTLElBQUk7QUFFcEIsaUJBRkYsU0FBUyxDQUVOLElBQUk7Z0NBRlAsU0FBUzs7QUFHZCxxQ0FISyxTQUFTLDZDQUdSLElBQUksRUFBRTtBQUNaLGNBQUksQ0FBQyxlQUFlLEdBQ2hCLE1BQU0sVUFBTyx1QkFBcUIsSUFBSSxZQUFTLENBQ3hDLElBQUksQ0FBQyxVQUFBLE1BQU07bUJBQUksTUFBTSxXQUFRO1dBQUEsQ0FBQyxDQUFDO1NBQzdDOztrQkFQUSxTQUFTLEVBQVMsSUFBSTs7NkJBQXRCLFNBQVM7QUFTbEIsYUFBRzttQkFBQSxlQUFHOztBQUNGLGtCQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUNoQyxvQkFBSSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsTUFBSyxJQUFJLEVBQUU7QUFDN0IsdUJBQUssRUFBRSxJQUFJO0FBQ1gsb0JBQUUsRUFBRSxNQUFNO0FBQ1YsNEJBQVUsRUFBRSxZQUFNO0FBQ2QsMEJBQUssT0FBTyxHQUFHLFVBQVUsQ0FBQztBQUMxQiwwQkFBSyxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7bUJBQ3RDO2lCQUNKLENBQUMsQ0FBQztBQUNQLHNCQUFLLE9BQU8sR0FBRyxTQUFTLENBQUM7QUFDekIscUJBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztlQUMzQixDQUFDLENBQUM7YUFDTjs7Ozs7O2VBdEJRLFNBQVM7U0FBUyxJQUFJIiwiZmlsZSI6InBlcmZvcm1hbmNlVGVzdC9taWNyb1Rlc3QuanMiLCJzb3VyY2VSb290IjoiL2FwcC8ifQ==