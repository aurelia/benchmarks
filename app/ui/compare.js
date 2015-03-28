import {HttpClient} from 'aurelia-http-client';

let baseUrl = "/api/results/";

export class Compare {
    static inject() { return [HttpClient]; }

    constructor(http) {
        this.http = http;
        this.results = [];
        this.leftName = "";
        this.rightName = "";
        this.leftResults = [];
        this.rightResults = [];
    }

    activate() {
        return this.http.get(baseUrl)
                   .then(message => {
                       this.results  = JSON.parse(message.response).results;
                   });
    }

    selectLeft() {
        this.getResults(this.leftName).then(results => this.leftResults = results);
    }

    selectRight() {
        this.getResults(this.rightName).then(results => this.rightResults = results);
    }

    getResults(name) {
        return this.http.get(baseUrl + name).then(message => JSON.parse(message.response));
    }

}
