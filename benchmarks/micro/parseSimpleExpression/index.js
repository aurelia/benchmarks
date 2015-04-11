import {Parser} from 'aurelia-framework';

export default deferred => {

    let parser = new Parser();
    let result = parser.parse("router.title");
    deferred.resolve();
};
