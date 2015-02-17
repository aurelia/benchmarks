System.register(["aurelia-framework", "aurelia-logging-console"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender;
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();

    aurelia.start().then(function (a) {
      return a.setRoot("ui/app", document.body);
    });
  }
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function () {
      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSxFQUNWLGVBQWU7dUJBS1AsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQy9CLFdBQU8sQ0FBQyxHQUFHLENBQ04sc0JBQXNCLEVBQUUsQ0FDeEIsZ0JBQWdCLEVBQUUsQ0FDbEIsTUFBTSxFQUFFLENBQ1IsZUFBZSxFQUFFLENBQUM7O0FBRXZCLFdBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQztLQUFBLENBQUMsQ0FBQztHQUNqRTs7O0FBZE8sZ0JBQVUscUJBQVYsVUFBVTs7QUFDVixxQkFBZSwwQkFBZixlQUFlOzs7QUFFdkIsZ0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLGdCQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoidWkvbWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvYXBwLyJ9