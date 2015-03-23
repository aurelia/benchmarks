document.addEventListener("aurelia-composed", function (e) {
        parent.postMessage("test-end", "*");
    }, false);

export function configure(aurelia) {

    parent.postMessage("test-start", "*");

    aurelia.use
        .defaultBindingLanguage()
        .defaultResources()
        .eventAggregator();

    aurelia.start().then(a => a.setRoot('app', document.body));
}
