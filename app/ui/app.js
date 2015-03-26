import {Router} from 'aurelia-router';

let routes = [
        { route: [''],  moduleId: './testList', nav: true, title:'Test List' },
        { route: ['/compare'], moduleId: './compare', nav: true, title: 'Compare Results'}
    ];

export class App {
    static inject() { return [Router]; }
    constructor(router) {
        this.router = router;
        this.router.configure(config => { config.map(routes); });
    }
}
