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
          runTests: {
            value: function runTests() {
              this.run(this.microTests);
              this.run(this.macroTests);
            },
            writable: true,
            configurable: true
          },
          run: {
            value: function run(tests) {
              var currentIndex = 0;

              var next = function () {
                currentIndex += 1;
                execute();
              };

              var execute = function () {
                if (currentIndex < tests.length) {
                  tests[currentIndex].run().then(next);
                }
              };

              execute();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3Rlc3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyx5Q0FFSixRQUFROzs7QUFKYixnQkFBVSxzQkFBVixVQUFVOztBQUNWLGVBQVMsNkJBQVQsU0FBUzs7QUFDVCxlQUFTLDZCQUFULFNBQVM7Ozs7Ozs7QUFFSixjQUFRO0FBSU4saUJBSkYsUUFBUSxDQUlMLElBQUk7Z0NBSlAsUUFBUTs7QUFLYixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNyQixjQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUN4Qjs7NkJBUlEsUUFBUTtBQUVWLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7OztBQVF4QyxrQkFBUTttQkFBQSxvQkFBRzs7QUFDUCxxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FDdEIsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2Isb0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLHNCQUFLLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7eUJBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDO2lCQUFBLENBQUMsQ0FBQztBQUNoRSxzQkFBSyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO3lCQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQztpQkFBQSxDQUFDLENBQUM7ZUFDbkUsQ0FBQyxDQUFDO2FBQ2pCOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUc7QUFDUCxrQkFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUIsa0JBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzdCOzs7O0FBRUQsYUFBRzttQkFBQSxhQUFDLEtBQUssRUFBRTtBQUNQLGtCQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7O0FBRXJCLGtCQUFJLElBQUksR0FBRyxZQUFNO0FBQ2IsNEJBQVksSUFBSSxDQUFDLENBQUM7QUFDbEIsdUJBQU8sRUFBRSxDQUFDO2VBQ2IsQ0FBQzs7QUFFRixrQkFBSSxPQUFPLEdBQUcsWUFBTTtBQUNoQixvQkFBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUM1Qix1QkFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDeEM7ZUFDSixDQUFDOztBQUVGLHFCQUFPLEVBQUUsQ0FBQzthQUNiOzs7Ozs7ZUF2Q1EsUUFBUSIsImZpbGUiOiJ1aS90ZXN0TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvYXBwLyJ9