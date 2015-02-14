import {Router} from 'aurelia-router';

let routes = [
        { route: [''],  moduleId: 'runTests', nav: true, title:'Run Tests' },
    ];

export class App {
    static inject() { return [Router]; }
    constructor(router) {
        this.router = router;
        this.router.configure(config => { config.map(routes); });
    }
}
