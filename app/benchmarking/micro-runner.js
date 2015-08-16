import {Benchmark} from 'benchmark';

// benchmark.js expects a global Benchmark object and at least one <script> tag in the document.
window.Benchmark = Benchmark;
document.head.appendChild(document.createElement('script'));

export class MicroRunner {
  run(name) {
    return System.import(`../benchmarks/micro/${name}/index`)
      .then(module => {
        let func = module.default;
        return new Promise(resolve => {
          let benchmark;
          let options = {
              defer: true,
              fn: func,
              onComplete: () => resolve(benchmark.times.period)
            };
          benchmark = new Benchmark(name, options);
          benchmark.run({ async: true });
        });
      });
  }
}
