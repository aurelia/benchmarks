System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Test;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Test = _export("Test", (function () {
        function Test(name) {
          _classCallCheck(this, Test);

          this._name = name;
          this._status = "ready";
        }

        _prototypeProperties(Test, null, {
          name: {
            get: function () {
              return this._name;
            },
            configurable: true
          },
          status: {
            get: function () {
              return this._status;
            },
            configurable: true
          },
          elapsed: {
            get: function () {
              return this._elapsed;
            },
            configurable: true
          }
        });

        return Test;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm1hbmNlVGVzdC90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBYSxJQUFJOzs7Ozs7OztBQUFKLFVBQUk7QUFFRixpQkFGRixJQUFJLENBRUQsSUFBSTtnQ0FGUCxJQUFJOztBQUdULGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzFCOzs2QkFMUSxJQUFJO0FBT1QsY0FBSTtpQkFBQSxZQUFHO0FBQ1AscUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNyQjs7O0FBRUcsZ0JBQU07aUJBQUEsWUFBRztBQUNULHFCQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7OztBQUVHLGlCQUFPO2lCQUFBLFlBQUc7QUFDVixxQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3hCOzs7OztlQWpCUSxJQUFJIiwiZmlsZSI6InBlcmZvcm1hbmNlVGVzdC90ZXN0LmpzIiwic291cmNlUm9vdCI6Ii9hcHAvIn0=