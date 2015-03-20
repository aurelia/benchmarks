import {HttpClient} from 'aurelia-http-client';
import {MicroTest} from 'performanceTest/microTest'
import {MacroTest} from 'performanceTest/macroTest'

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
                       this.macroTests = result.macro.map(name => new MacroTest(name));
                   });
    }

    runTests() {
        this.run(this.microTests);
        this.run(this.macroTests);
    }

    run(tests) {
        let currentIndex = 0;

        let next = () => {
            currentIndex += 1;
            execute();
        };

        let execute = () => {
            if(currentIndex < tests.length) {
                tests[currentIndex].run().then(next);
            }
        };

        execute();
    }
}
