System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, ForLoopTest;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ForLoopTest = (function () {
        function ForLoopTest() {
          _classCallCheck(this, ForLoopTest);
        }

        _prototypeProperties(ForLoopTest, null, {
          run: {
            value: function run() {
              for (var i = 0; i < 1000; i++) {
                var x = i * i;
              }
              alert("done!");
            },
            writable: true,
            configurable: true
          }
        });

        return ForLoopTest;
      })();
      _export("default", new ForLoopTest());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pY3JvL2Zvckxvb3AvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFNLFdBQVc7Ozs7Ozs7O0FBQVgsaUJBQVc7aUJBQVgsV0FBVztnQ0FBWCxXQUFXOzs7NkJBQVgsV0FBVztBQUViLGFBQUc7bUJBQUEsZUFBRztBQUNGLG1CQUFJLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pCLG9CQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2VBQ2pCO0FBQ0QsbUJBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNsQjs7Ozs7O2VBUEMsV0FBVzs7eUJBV0YsSUFBSSxXQUFXLEVBQUUiLCJmaWxlIjoibWljcm8vZm9yTG9vcC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvYmVuY2htYXJrcy8ifQ==