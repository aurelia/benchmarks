System.register(["aurelia-http-client", "performanceTest/microTest", "performanceTest/macroTest"], function (_export) {
  "use strict";

  var HttpClient, MicroTest, MacroTest, _prototypeProperties, _classCallCheck, TestList;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_performanceTestMicroTest) {
      MicroTest = _performanceTestMicroTest.MicroTest;
    }, function (_performanceTestMacroTest) {
      MacroTest = _performanceTestMacroTest.MacroTest;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TestList = _export("TestList", (function () {
        function TestList(http) {
          _classCallCheck(this, TestList);

          this.http = http;
          this.microTests = [];
          this.macroTests = [];
          this.resultsName = "";

          http.defaultRequestHeaders.add("Content-Type", "application/json");
        }

        _prototypeProperties(TestList, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.http.get("/api/tests").then(function (message) {
                var result = JSON.parse(message.response);
                _this.microTests = result.micro.map(function (name) {
                  return new MicroTest(name);
                });
                _this.macroTests = result.macro.map(function (name) {
                  return new MacroTest(name);
                });
              });
            },
            writable: true,
            configurable: true
          },
          saveResults: {
            value: function saveResults() {
              var _this = this;


              var testProjection = function (test) {
                return { name: test.name, elapsed: test.elapsed };
              };

              var resultData = {
                name: this.resultsName,
                microTests: this.microTests.map(testProjection),
                macrotests: this.macroTests.map(testProjection)
              };

              return this.http.post("/api/results", resultData).then(function () {
                return _this.resultsName = "";
              });
            },
            writable: true,
            configurable: true
          },
          loaded: {
            value: function loaded() {},
            writable: true,
            configurable: true
          },
          runTests: {
            value: function runTests() {
              var _this = this;
              this.runMicroTests().then(function () {
                return _this.runMacroTests();
              });
            },
            writable: true,
            configurable: true
          },
          runSingleMicroTest: {
            value: function runSingleMicroTest(test) {
              return new Promise(function (resolve, reject) {
                test.run().then(function () {
                  return resolve();
                });
              });
            },
            writable: true,
            configurable: true
          },
          runSingleMacroTest: {
            value: function runSingleMacroTest(test) {
              var _this = this;


              return new Promise(function (resolve, reject) {
                _this.currentMacroTest = test;
                _this.currentMacroTest.run().then(function () {
                  _this.currentMacroTest = null;
                  resolve();
                });
              });
            },
            writable: true,
            configurable: true
          },
          runMacroTests: {
            value: function runMacroTests() {
              var _this = this;


              return new Promise(function (resolve, reject) {
                var currentIndex = 0;
                var tests = _this.macroTests;

                var next = function () {
                  currentIndex += 1;
                  execute.call(_this);
                };

                var execute = function () {
                  if (currentIndex < tests.length) {
                    _this.currentMacroTest = tests[currentIndex];
                    _this.currentMacroTest.run().then(next);
                  } else {
                    _this.currentMacroTest = null;
                    resolve();
                  }
                };

                execute.call(_this);
              });
            },
            writable: true,
            configurable: true
          },
          runMicroTests: {
            value: function runMicroTests() {
              var _this = this;


              return new Promise(function (resolve, reject) {
                var currentIndex = 0;
                var tests = _this.microTests;

                var next = function () {
                  currentIndex += 1;
                  execute.call(_this);
                };

                var execute = function () {
                  if (currentIndex < tests.length) {
                    tests[currentIndex].run().then(next);
                  } else {
                    resolve();
                  }
                };

                execute.call(_this);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return TestList;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LE1BQU0sRUFBSztBQUNwQyxzQkFBSyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDN0Isc0JBQUssZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFFLFlBQU07QUFDcEMsd0JBQUssZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzdCLHlCQUFPLEVBQUUsQ0FBQztpQkFDYixDQUFDLENBQUM7ZUFDUixDQUFDLENBQUM7YUFDSjs7OztBQUVELHVCQUFhO21CQUFBLHlCQUFHOzs7O0FBRVoscUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBRXBDLG9CQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDckIsb0JBQUksS0FBSyxHQUFHLE1BQUssVUFBVSxDQUFDOztBQUU1QixvQkFBSSxJQUFJLEdBQUcsWUFBTTtBQUNiLDhCQUFZLElBQUksQ0FBQyxDQUFDO0FBQ2xCLHlCQUFPLENBQUMsSUFBSSxPQUFNLENBQUM7aUJBQ3RCLENBQUM7O0FBRUYsb0JBQUksT0FBTyxHQUFHLFlBQU07QUFDaEIsc0JBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDNUIsMEJBQUssZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVDLDBCQUFLLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzttQkFDMUMsTUFDRztBQUNBLDBCQUFLLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUM3QiwyQkFBTyxFQUFFLENBQUM7bUJBQ2I7aUJBQ0osQ0FBQzs7QUFFRix1QkFBTyxDQUFDLElBQUksT0FBTSxDQUFDO2VBQ3RCLENBQUMsQ0FBQzthQUNOOzs7O0FBRUQsdUJBQWE7bUJBQUEseUJBQUc7Ozs7QUFFWixxQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFFcEMsb0JBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUNyQixvQkFBSSxLQUFLLEdBQUcsTUFBSyxVQUFVLENBQUM7O0FBRTVCLG9CQUFJLElBQUksR0FBRyxZQUFNO0FBQ2IsOEJBQVksSUFBSSxDQUFDLENBQUM7QUFDbEIseUJBQU8sQ0FBQyxJQUFJLE9BQU0sQ0FBQztpQkFDdEIsQ0FBQzs7QUFFRixvQkFBSSxPQUFPLEdBQUcsWUFBTTtBQUNoQixzQkFBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUM1Qix5QkFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzttQkFDeEMsTUFDRztBQUNBLDJCQUFPLEVBQUUsQ0FBQzttQkFDYjtpQkFDSixDQUFDOztBQUVGLHVCQUFPLENBQUMsSUFBSSxPQUFNLENBQUM7ZUFDdEIsQ0FBQyxDQUFDO2FBQ047Ozs7OztlQWxIUSxRQUFRIiwiZmlsZSI6InVpL3Rlc3RMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9hcHAvIn0=