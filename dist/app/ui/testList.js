System.register(["aurelia-http-client", "performanceTest/microTest"], function (_export) {
  "use strict";

  var HttpClient, MicroTest, _prototypeProperties, _classCallCheck, TestList;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_performanceTestMicroTest) {
      MicroTest = _performanceTestMicroTest.MicroTest;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3Rlc3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFVBQVUsRUFDVixTQUFTLHlDQUVKLFFBQVE7OztBQUhiLGdCQUFVLHNCQUFWLFVBQVU7O0FBQ1YsZUFBUyw2QkFBVCxTQUFTOzs7Ozs7O0FBRUosY0FBUTtBQUlOLGlCQUpGLFFBQVEsQ0FJTCxJQUFJO2dDQUpQLFFBQVE7O0FBS2IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDckIsY0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDeEI7OzZCQVJRLFFBQVE7QUFFVixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFReEMsa0JBQVE7bUJBQUEsb0JBQUc7O0FBQ1AscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQ3RCLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNiLG9CQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQyxzQkFBSyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO3lCQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQztpQkFBQSxDQUFDLENBQUM7ZUFDbkUsQ0FBQyxDQUFDO2FBQ2pCOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUc7QUFDUCxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtlQUFBLENBQUMsQ0FBQyxDQUFDO2FBQ2xEOzs7Ozs7ZUFwQlEsUUFBUSIsImZpbGUiOiJ1aS90ZXN0TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvYXBwLyJ9