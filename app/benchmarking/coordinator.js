import {inject} from 'aurelia-dependency-injection';
import {type} from './type';
import {MicroRunner} from './micro-runner';
import {MacroRunner} from './macro-runner';
import {ResultFactory} from './result-factory';
import {ResultRepository} from './result-repository';

@inject(MicroRunner, MacroRunner, ResultFactory, ResultRepository)
export class Coordinator {
  promise = Promise.resolve(null);
  active = null;

  constructor(micro, macro, resultFactory, results) {
    this.micro = micro;
    this.macro = macro;
    this.resultFactory = resultFactory;
    this.results = results;
  }

  enqueue(definition) {
    this.promise = this.promise.then(() => {
      this.active = definition;
      let runner = definition.type === type.micro ? this.micro : this.macro;
      return runner.run(definition.name)
        .then(measures => {
          let result = this.resultFactory.fromMeasures(definition.name, measures);
          this.results.add(result);
          this.active = null;
        });
    });
  }
}
