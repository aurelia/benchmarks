import {HttpClient} from 'aurelia-http-client';

let baseUrl = "/api/results/";

let compute = function(left, right) {
    if(left && right) {
        return (parseFloat(left.elapsed) - parseFloat(right.elapsed)).toFixed(4)
    }
};

export class Compare {
    static inject() { return [HttpClient]; }

    constructor(http) {
        this.http = http;
        this.results = [];
        this.leftName = "";
        this.rightName = "";
        this.leftResults = {};
        this.rightResults = {};
        this.differences = {};
    }

    activate() {
        return this.http.get(baseUrl)
                   .then(message => {
                       this.results  = JSON.parse(message.response).results;
                   });
    }

    selectLeft() {
        this.getResults(this.leftName)
            .then(results => this.leftResults = results)
            .then(() => this.createDifferences());
    }

    selectRight() {
        this.getResults(this.rightName)
            .then(results => this.rightResults = results)
            .then(() => this.createDifferences());
    }

    createDifferences() {
        this.differences = {};
        if(this.leftResults.microTests && this.rightResults.microTests) {
            this.differences.microTests = this._computeDifference(this.leftResults.microTests, this.rightResults.microTests);
        }
        if(this.leftResults.macroTests && this.rightResults.macroTests) {
            this.differences.macroTests = this._computeDifference(this.leftResults.macroTests, this.rightResults.macroTests);
        }
    }

    getResults(name) {
        return this.http.get(baseUrl + name).then(message => JSON.parse(message.response));
    }

    _computeDifference(leftTests, rightTests) {
        let result = [];
        rightTests.map(right => {
            let left = leftTests.filter(t => t.name == right.name);
            if(left && left.length > 0) {
                result.push({
                    name: right.name,
                    difference: compute(left[0], right)
                });
            } else {
                result.push({name: right.name});
            }
        });
        return result;
    };
}
