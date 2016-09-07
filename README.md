# aurelia-benchmarks

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Performance benchmarks for Aurelia.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.aurelia.io/) and [our email list](http://durandal.us10.list-manage1.com/subscribe?u=dae7661a3872ee02b519f6f29&id=3de6801ccc). We also invite you to [follow us on twitter](https://twitter.com/aureliaeffect). If you have questions, please [join our community on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome or Firefox Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Installing

```shell
npm install
jspm install
```

**Important:** The jspm install will modify the paths in config.js.  Revert these modifications:

![paths](http://i.imgur.com/Cz9AClM.png)

This issue is being [investigated](https://github.com/jspm/jspm-cli/issues/1077#issuecomment-136190024).

## Running

Many factors can impact benchmark performance.  It's a good idea to close unnecessary browser tabs and applications while running the benchmarks.  A reboot prior to running the benchmarks might help if you're seeing inconsistent results.

To start the application:

```shell
gulp watch
```

Enable Chrome's microsecond timer with the `--enable-benchmarking` argument.

Windows:
```shell
start chrome --enable-benchmarking
```

Browse to [http://localhost:3000](http://localhost:3000).

### Establish a baseline

The benchmark application has two sections: Harness and Tags.  Use the harness section to select and add benchmarks to the run queue.  Benchmarks are run sequentially.  If it's your first time running the application you'll want to establish the baseline performance.  Select all the benchmarks and press **Run**.  The currently running benchmark will be indicated in blue:

![running](http://i.imgur.com/sk0w1x6.png)

When the benchmarks complete enter a tag name (ie "baseline") and press **Tag**.  This will persist the most recent result for each of the selected benchmarks in `dist/tags/tags.json`.

![tag](http://i.imgur.com/oak6sC7.png)

```json
[
  {
    "name": "binding-bind",
    "timestamp": "2015-08-31T01:13:07.590Z",
    "userAgent": "Chrome on Windows 8.1",
    "period": 0.005819236144566549,
    "tag": "baseline"
  },
  {
    "name": "binding-interpolation-long",
    "timestamp": "2015-08-31T01:13:13.397Z",
    "userAgent": "Chrome on Windows 8.1",
    "period": 0.004415373401538267,
    "tag": "baseline"
  },
  {
    "name": "binding-interpolation-short",
    "timestamp": "2015-08-31T01:13:19.228Z",
    "userAgent": "Chrome on Windows 8.1",
    "period": 0.006167281012655818,
    "tag": "baseline"
  },
  ...
```

Tag names should be specific to the "version" or "change" to the Aurelia codebase you are performance testing.  Test changes across multiple browsers and tag the results using the same tag name to enable cross-browser performance comparisons.

![cross-browser](http://i.imgur.com/ifreqNG.png)

## Test changes

Once you've established a baseline you're ready to test changes.  Use the `gulp update-own-deps` command to pull in changes from the Aurelia repos.  For quick tests select a subset of the benchmarks using the search feature.

![search](http://i.imgur.com/egWRnW0.png)

Click **Run** to re-run the benchmarks.  Results will appear alongside the baseline results.  Improved performance is indicated in green.  Worse performance is indicated in red.

![perf](http://i.imgur.com/FXN0M0A.png)

Repeat the process of making changes and using `gulp update-own-deps` until you're satisfied with the results.

## Compare tags

The tags section charts the performance of each tagged result.  Use the benchmark and user-agent filters to limit the results that appear in the chart.

![tags](http://i.imgur.com/MS1xoHc.png)

---

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
