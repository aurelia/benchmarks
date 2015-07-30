document.addEventListener(
  "aurelia-composed",
  () => parent.postMessage("test-end", "*"), false);

export function configure(aurelia) {
  console.log('start');
  parent.postMessage("test-start", "*");
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(a => a.setRoot());
}
