export function configure(aurelia) {
    aurelia.globalizeResources('./status', './result');

    // templating benchmark resources:
    aurelia.globalizeResources('./benchmarks/attributes', './benchmarks/point',
      './benchmarks/content-selectors', './benchmarks/template-parts', './benchmarks/surrogate-behaviors');
}
