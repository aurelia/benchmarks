import {Benchmark} from 'benchmark';

// benchmark.js expects a global Benchmark object and at least one <script> tag in the document.
window.Benchmark = Benchmark;
document.head.appendChild(document.createElement('script'));

export class MicroRunner {
  run(name) {
    return System.import(`../benchmarks/micro/${name}/index`)
      .then(module => {
        let heapDeltas = [];
        let fn = module.default;

        // track changes in heap size if memory profiling is available.
        if (window.performance && window.performance.memory && window.performance.memory.usedJSHeapSize) {
          fn = deferred => {
            let initialHeapSize = window.performance.memory.usedJSHeapSize;
            module.default(deferred);
            heapDeltas.push(window.performance.memory.usedJSHeapSize - initialHeapSize);
          }
        }

        return new Promise(resolve => {
          let benchmark;
          let options = {
              defer: true,
              fn: fn,
              onComplete: () => resolve({ period: benchmark.times.period, heapDeltas: heapDeltas })
            };
          benchmark = new Benchmark(name, options);

          // force garbage collection
          if (window.gc) {
            window.gc();
          }

          benchmark.run({ async: true });
        });
      });
  }
}
