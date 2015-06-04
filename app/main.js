export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('./ui/resources/index');

  aurelia.start().then(a => a.setRoot('ui/app'));
}
