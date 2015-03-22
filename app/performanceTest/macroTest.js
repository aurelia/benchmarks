import {Test} from './test'

export class MacroTest extends Test {

    constructor(name) {
        super(name);
        this._path = `/benchmarks/macro/${name}/index.html`;
    }

    get path() {
        return this._path;
    }

    run() {
        var promise = new Promise((resolve, reject) => {
                this._endResolve = resolve;
                this._endReject = reject;
        });
        this._status = "running";
        return promise;
    }

    start() {
        this._startTime = new Date();
    }

    end() {
        this._status = "complete";
        this._elapsed = (new Date() - this._startTime) / 1000.0;
        this._endResolve();
    }
}
