import {HttpClient} from 'aurelia-http-client';
import {MicroTest} from 'performanceTest/microTest'

export class TestList {

    static inject() { return [HttpClient]; }

    constructor(http) {
        this.http = http;
        this.microTests = [];
        this.macroTests = [];
    }

    activate() {
        return this.http.get('/api/tests')
                   .then(message => {
                       var result = JSON.parse(message.response);
                       this.microTests = result.micro.map(name => new MicroTest(name));
                   });
    }

    runTests() {
        Promise.all(this.microTests.map(t => t.run()));
    }
}
