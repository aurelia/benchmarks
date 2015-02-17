import {Router} from 'aurelia-router';

let routes = [
        { route: [''],  moduleId: 'ui/testRunner', nav: true, title:'Run Tests' },
    ];

export class App {
    static inject() { return [Router]; }
    constructor(router) {
        this.router = router;
        this.router.configure(config => { config.map(routes); });
    }
}
