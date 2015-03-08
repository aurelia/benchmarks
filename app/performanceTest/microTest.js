import {Test} from './test'

export class MicroTest extends Test {

    constructor(name) {
        super(name);
        this._importComplete =
            System.import(`benchmarks/micro/${name}/index`)
                  .then(module => module.default);
    }

    run() {
        this._importComplete.then(testFn => {
            let bench = new Benchmark(this.name, {
                    defer: true,
                    fn: testFn,
                    onComplete: () => {
                        this._status = "complete";
                        this._elapsed = bench.times.elapsed;
                    }
                });
            this._status = "running";
            bench.run({async:true});
        });
    }
}
