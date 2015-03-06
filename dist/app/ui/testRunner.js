System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, TestRunner;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TestRunner = _export("TestRunner", (function () {
        function TestRunner(http) {
          _classCallCheck(this, TestRunner);

          this.http = http;
          this.microTests = [];
          this.macroTests = [];
        }

        _prototypeProperties(TestRunner, {
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
              return this.http.get("/api/tests").then(function (m) {
                var result = JSON.parse(m.response);
                _this.microTests = result.micro;
                _this.macroTests = result.macro;
              });
            },
            writable: true,
            configurable: true
          },
          runTests: {
            value: function runTests() {
              var testPromises = this.microTests.map(function (t) {
                return System["import"]("benchmarks/micro/" + t + "/index");
              });
              Promise.all(testPromises).then(function () {
                testPromises.map(function (p) {
                  return p.then(function (module) {
                    module["default"].run();
                  });
                });
              });
            },
            writable: true,
            configurable: true
          }
        });

        return TestRunner;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3Rlc3RSdW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSx5Q0FFTCxVQUFVOzs7QUFGZixnQkFBVSxzQkFBVixVQUFVOzs7Ozs7O0FBRUwsZ0JBQVU7QUFJUixpQkFKRixVQUFVLENBSVAsSUFBSTtnQ0FKUCxVQUFVOztBQUtmLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQ3hCOzs2QkFSUSxVQUFVO0FBRVosZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBUXhDLGtCQUFRO21CQUFBLG9CQUFHOztBQUNQLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUN0QixJQUFJLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDUCxvQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsc0JBQUssVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDL0Isc0JBQUssVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7ZUFDakMsQ0FBQyxDQUFDO2FBQ2pCOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUc7QUFDUCxrQkFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLE1BQU0sVUFBTyx1QkFBcUIsQ0FBQyxZQUFTO2VBQUEsQ0FBQyxDQUFDO0FBQzFGLHFCQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQ2pDLDRCQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt5QkFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQ3JDLDBCQUFNLFdBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzttQkFDeEIsQ0FBQztpQkFBQSxDQUFDLENBQUM7ZUFDUCxDQUFDLENBQUM7YUFDTjs7Ozs7O2VBMUJRLFVBQVUiLCJmaWxlIjoidWkvdGVzdFJ1bm5lci5qcyIsInNvdXJjZVJvb3QiOiIvYXBwLyJ9