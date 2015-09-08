import Chartist from 'chartist';
import {inject} from 'aurelia-dependency-injection';
import {DefinitionRepository} from '../../benchmarking/definition-repository';
import {ResultRepository} from '../../benchmarking/result-repository';
import {BenchmarkViewModel} from '../benchmark-view-model';

@inject(DefinitionRepository, ResultRepository)
export class Results extends BenchmarkViewModel {
  charts;
  chartOptions = {};
  selectedUserAgents;
  tagNames;
  showFilters = true;

  constructor(definitionRepository, resultRepository) {
    super(definitionRepository, resultRepository);
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  compileChartData() {
    let charts = [];
    let results = this.resultRepository.tags;

    for (let definition of this.selectedDefinitions) {
      let series = [];

      for (let ua of this.selectedUserAgents) {
        let data = this.tagNames.map(tag => {
          let result = results.find(t => t.userAgent === ua && t.name === definition.name && t.tag === tag);
          return result ? result.period : null;
        });
        if (data.find(d => d !== null)) {
          series.push({
            name: ua,
            data: data
          });
        }
      }

      charts.push({
        name: definition.name,
        data: {
          labels: this.tagNames,
          series: series
        }
      });
    }
    this.charts = charts;
  }

  filterClicked() {
    clearTimeout(this.filterTimeoutHandle);
    this.filterTimeoutHandle = setTimeout(::this.compileChartData, 300);
    return true;
  }

  applyDefinitionFilter() {
    super.applyDefinitionFilter();
    this.compileChartData();
  }

  async activate() {
    await super.activate();
    this.selectedUserAgents = this.userAgents.slice(0);

    // display definitions with results.
    let definitionsWithResults = this.definitions.filter(d => this.resultRepository.tags.find(t => t.name === d.name));
    this.definitions = this.filteredDefinitions = definitionsWithResults;
    this.selectedDefinitions = this.definitions.slice(0);

    // distinct list of tag names.
    this.tagNames = this.resultRepository.tags
      .filter((result, index) => this.resultRepository.tags.findIndex(t => t.tag === result.tag) === index)
      .map(result => result.tag);

    this.compileChartData();
  }
}
