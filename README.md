# benchmarks

Performance benchmarks for Aurelia.

## Running the app

To run, follow these commands.

```shell
npm install
jspm install -y
gulp watch
```

Browse to [http://localhost:3000](http://localhost:3000).

## Adding Micro Benchmarks

Micro benchmarks are pure JavaScript code. To create a micro benchmark, add a folder to the `benchmarks/micro` folder and add a file named
`index.js`.

Currently this framework only supports an index.js
file that exports a single function. The function
will take a deferred object as a parameter, and the function must call `deferred.resolve()` to complete the test. The function will execute more than once as the framework finds a statistically valid result.

**Example**

```
export default (deferred) => {
    setTimeout(() => deferred.resolve(), 1000);
}
```
## Adding Macro Benchmarks

Macro benchmarks require a DOM and will be loaded into a hidden iframe for execution.

To add a macro benchmark, create a folder in the `benchmarks\macro` folder and include an index.html file. This file can load any scripts it needs, for example index.html can load an Aurelia app.

JavaScript code in a macro benchmark has two requirements:

1. Invoke `postMessage` on the parent window and pass `"test-start"` to announce the start of a test.

1. Invoke `postMessage` on the parent window and pass `"test-end"` to announce the end of a test.

Macro tests will currently only execute once.

**Example**

The following script is the main.js file for an Aurelia application and is attempting to measure the time
from configuration start till the Aurelia framework fires the `aurelia-composed` event.

```
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
```

**Note**
Enable Chrome's microsecond timer with --enable-benchmarking

**Todo**
observe a simple property w/ O.o
observe a simple property w/o O.o
observe an input element's value
observe an SVG element
observe a property with dependencies
observe a property with custom adapter
