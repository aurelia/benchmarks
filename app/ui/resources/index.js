export function configure(aurelia) {
    aurelia.globalizeResources('./status', './result');
    
    // templating benchmark resources:
    aurelia.globalizeResources('./benchmarks/attributes', './benchmarks/point');    
}
