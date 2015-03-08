export class Test {

    constructor(name) {
        this._name = name;
        this._status = "ready";
    }

    get name() {
        return this._name;
    }

    get status() {
        return this._status;
    }

    get elapsed() {
        return this._elapsed;
    }
}
