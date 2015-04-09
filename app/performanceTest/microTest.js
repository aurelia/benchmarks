import {Test} from './test'

export class MicroTest extends Test {

    constructor(name) {
        super(name);
        this._importComplete =
            System.import(`benchmarks/micro/${name}/index`)
                  .then(module => module.default);
    }

    run() {

        return this._importComplete.then(testFn => {

            let testRunner = (resolve, reject) => {
                let bench = new Benchmark(this.name, {
                        defer: true,
                        fn: testFn,
                        onComplete: () => {
                            this._status = "complete";
                            this._elapsed = bench.times.period.toFixed(4);
                            resolve(this);
                        }
                    });
                this._status = "running";
                bench.run({async:true});
            };

            return new Promise(testRunner);
        });
    }
}
