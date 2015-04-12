import {Parser} from 'aurelia-framework';

let expressions = [];
for(let i = 0; i < 10000; i++) {
    expressions.push("${person." + i + "}");
}

export default deferred => {
    let parser = new Parser();
    //parser.parse("${person.name.first}");

    deferred.resolve();
};
