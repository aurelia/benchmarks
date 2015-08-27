import {inject} from 'aurelia-dependency-injection';
import {Coordinator} from '../../benchmarking/coordinator';
import {DefinitionRepository} from '../../benchmarking/definition-repository';
import {ResultRepository} from '../../benchmarking/result-repository';
import {BenchmarkViewModel} from '../benchmark-view-model';

@inject(DefinitionRepository, ResultRepository, Coordinator)
export class Harness extends BenchmarkViewModel {
  isTagging = false;

  constructor(definitionRepository, resultRepository, coordinator) {
    super(definitionRepository, resultRepository);
    this.coordinator = coordinator;
  }

  run() {
    this.selectedDefinitions.forEach(::this.coordinator.enqueue);
  }

  tag(tag) {
    let names = this.selectedDefinitions.map(d => d.name);
    this.isTagging = true;
    this.resultRepository.tag(names, tag)
      .then(() => this.isTagging = false);
  }

  definitionClicked(definition, event) {
    if (event.target.type === 'checkbox') {
      throw 'hackity hack hack hack';
      // event.stopPropagation();
      // event.preventDefault();
      // return false;
      // return true;
      // return;
    }
    let index = this.selectedDefinitions.indexOf(definition);
    if (index === -1) {
      this.selectedDefinitions.push(definition);
    } else {
      this.selectedDefinitions.splice(index, 1);
    }
  }
}
