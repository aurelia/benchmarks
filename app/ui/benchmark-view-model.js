export class BenchmarkViewModel {
  definitionRepository;
  resultRepository;
  results;

  definitions;
  filteredDefinitions;
  selectedDefinitions = [];

  userAgents;

  filterTimeoutHandle;

  constructor(definitionRepository, resultRepository) {
    this.definitionRepository = definitionRepository;
    this.resultRepository = resultRepository;
  }

  async activate() {
    await Promise.all([this.definitionRepository.load(), this.resultRepository.load()]);
    this.definitions = this.filteredDefinitions = this.definitionRepository.definitions;
    this.results = this.resultRepository.results;
    this.userAgents = this.resultRepository.userAgents;
  }

  get allDefinitionsSelected() {
    return this.selectedDefinitions.length === this.filteredDefinitions.length
      && this.selectedDefinitions.length > 0;
  }
  set allDefinitionsSelected(newValue) {
    this.selectedDefinitions.splice(0, this.selectedDefinitions.length);
    if (newValue) {
      this.selectedDefinitions.splice(0, 0, ...this.filteredDefinitions);
    }
  }

  applyDefinitionFilter() {
    let filter = this.definitionFilter.trim().toLowerCase();
    this.filteredDefinitions = this.definitions.filter(d => d.name.indexOf(filter) !== -1);
    this.selectedDefinitions = this.selectedDefinitions.filter(d => d.name.indexOf(filter) !== -1);
  }

  _definitionFilter = '';
  get definitionFilter() {
    return this._definitionFilter;
  }
  set definitionFilter(newValue) {
    this._definitionFilter = newValue;
    clearTimeout(this.filterTimeoutHandle);
    this.filterTimeoutHandle = setTimeout(::this.applyDefinitionFilter, 200);
  }
}
