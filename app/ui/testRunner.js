import {HttpClient} from 'aurelia-http-client';

export class TestRunner {

    static inject() { return [HttpClient]; }

    constructor(http) {
        this.http = http;
        this.microTests = [];
        this.macroTests = [];
    }

    activate() {
        return this.http.get('/api/tests')
                   .then(m => {
                       var result = JSON.parse(m.response);
                       this.microTests = result.micro;
                       this.macroTests = result.macro
                   });
    }

    runTests() {
        var testPromises = this.microTests.map(t => System.import(`benchmarks/micro/${t}/index`));
        Promise.all(testPromises).then(() => {
            testPromises.map(p => p.then((module) => {
                module.default.run();
            }));
        });
    }
}
