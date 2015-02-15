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
          }
        });

        return TestRunner;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RSdW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSx5Q0FFTCxVQUFVOzs7QUFGZixnQkFBVSxzQkFBVixVQUFVOzs7Ozs7O0FBRUwsZ0JBQVU7QUFJUixpQkFKRixVQUFVLENBSVAsSUFBSTtnQ0FKUCxVQUFVOztBQUtmLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ3BCOzs2QkFOUSxVQUFVO0FBRVosZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBTXhDLGtCQUFRO21CQUFBLG9CQUFHOztBQUNQLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUN0QixJQUFJLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDUCxvQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsc0JBQUssVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDL0Isc0JBQUssVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7ZUFDakMsQ0FBQyxDQUFDO2FBQ2pCOzs7Ozs7ZUFmUSxVQUFVIiwiZmlsZSI6InRlc3RSdW5uZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcC8ifQ==