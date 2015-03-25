import {Router} from 'aurelia-router';

let routes = [
        { route: [''],  moduleId: './testList', nav: true, title:'Test List' },
    ];

export class App {
    static inject() { return [Router]; }
    constructor(router) {
        this.router = router;
        this.router.configure(config => { config.map(routes); });
    }
}
