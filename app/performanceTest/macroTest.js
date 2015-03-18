import {Test} from './test'

export class MacroTest extends Test {

    constructor(name) {
        super(name);
        this._path = `/benchmarks/macro/${name}/index.html`;
    }

    run() {

    }
}
