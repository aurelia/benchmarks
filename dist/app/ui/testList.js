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
//# sourceMappingURL=data:application/json;base64,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