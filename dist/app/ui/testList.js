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
              Promise.all(this.microTests.map(function (t) {
                return t.run();
              }));
              Promise.all(this.macroTests.map(function (t) {
                return t.run();
              }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3Rlc3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyx5Q0FFSixRQUFROzs7QUFKYixnQkFBVSxzQkFBVixVQUFVOztBQUNWLGVBQVMsNkJBQVQsU0FBUzs7QUFDVCxlQUFTLDZCQUFULFNBQVM7Ozs7Ozs7QUFFSixjQUFRO0FBSU4saUJBSkYsUUFBUSxDQUlMLElBQUk7Z0NBSlAsUUFBUTs7QUFLYixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNyQixjQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUN4Qjs7NkJBUlEsUUFBUTtBQUVWLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7OztBQVF4QyxrQkFBUTttQkFBQSxvQkFBRzs7QUFDUCxxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FDdEIsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2Isb0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLHNCQUFLLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7eUJBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDO2lCQUFBLENBQUMsQ0FBQztBQUNoRSxzQkFBSyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO3lCQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQztpQkFBQSxDQUFDLENBQUM7ZUFDbkUsQ0FBQyxDQUFDO2FBQ2pCOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUc7QUFDUCxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtlQUFBLENBQUMsQ0FBQyxDQUFDO0FBQy9DLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsR0FBRyxFQUFFO2VBQUEsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7Ozs7OztlQXRCUSxRQUFRIiwiZmlsZSI6InVpL3Rlc3RMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9hcHAvIn0=