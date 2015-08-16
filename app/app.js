import {inject} from 'aurelia-dependency-injection';
import {Coordinator} from './benchmarking/coordinator';
import {DefinitionRepository} from './benchmarking/definition-repository';
import {ResultRepository} from './benchmarking/result-repository';

@inject(Coordinator, DefinitionRepository, ResultRepository)
export class App {
  definitions = null;
  selectedDefinitions = [];
  isTagging = false;
  results = null;
  userAgents = null;

  constructor(coordinator, definitionRepository, resultRepository) {
    this.coordinator = coordinator;
    this.definitionRepository = definitionRepository;
    this.resultRepository = resultRepository;
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

  get allSelected() {
    return this.selectedDefinitions.length === this.definitions.length;
  }
  set allSelected(newValue) {
    this.selectedDefinitions.splice(0, this.selectedDefinitions.length);
    if (newValue) {
      this.selectedDefinitions.splice(0, 0, ...this.definitions);
    }
  }

  activate() {
    let definitionsPromise = this.definitionRepository.load()
      .then(() => this.definitions = this.definitionRepository.definitions);
    let resultsPromise = this.resultRepository.load()
      .then(() => {
        this.results = this.resultRepository.results;
        this.userAgents = this.resultRepository.userAgents;
      });
    return Promise.all([definitionsPromise, resultsPromise]);
  }
}

export class FilterDefinitionsValueConverter {
  toView(definitions, search) {
    search = (search || '').trim().toLowerCase();
    if (search.length) {
      return definitions.filter(d => d.name.indexOf(search) !== -1);
    }
    return definitions;
  }
}
