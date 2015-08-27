import {HttpClient} from 'aurelia-http-client';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('./resources')
    .feature('./benchmark-resources');

  // configure the http client.
  let http = aurelia.container.get(HttpClient);
  http.configure(x => x.withHeader('Content-Type', 'application/json'));
  aurelia.container.registerInstance(HttpClient, http);

  // register the iframe element used by the macro benchmark runner.
  let iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  aurelia.container.registerInstance(HTMLIFrameElement, iframe);

  aurelia.start().then(a => a.setRoot('ui/app'))
    .then(() => document.body.appendChild(iframe)); // add the iframe to the body after the app is composed.
}
