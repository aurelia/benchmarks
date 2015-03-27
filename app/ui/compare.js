import {HttpClient} from 'aurelia-http-client';

export class Compare {
    static inject() { return [HttpClient]; }

    constructor(http) {
        this.http = http;
    }

    activate() {
        return this.http.get('/api/results')
                   .then(message => {
                       this.results  = JSON.parse(message.response).results;
                   });
    }

    selectLeft() {

    }

    selectRight() {

    }

    getResults(name) {
        
    }
}
