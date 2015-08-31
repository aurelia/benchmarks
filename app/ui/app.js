import {inject} from 'aurelia-dependency-injection';
import {Coordinator} from '../benchmarking/coordinator';

@inject(Coordinator)
export class App {
  constructor(coordinator) {
    this.coordinator = coordinator;
  }

  configureRouter(config, router){
    config.title = 'Benchmarks';
    config.map([
      { route: '', redirect: 'harness' },
      { route: 'harness', name: 'harness', moduleId: 'ui/harness/harness', nav: true, title: 'Harness' },
      { route: 'tags', name: 'tags', moduleId: 'ui/tags/tags', nav: true, title: 'Tags' },
    ]);

    this.router = router;
  }
}
