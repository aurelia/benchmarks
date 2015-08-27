export class App {
  configureRouter(config, router){
    config.title = 'Benchmarks';
    config.map([
      { route: '', redirect: 'harness' },
      { route: 'harness', name: 'harness', moduleId: 'ui/harness/harness', nav: true, title: 'Harness' },
      { route: 'results', name: 'results', moduleId: 'ui/results/results', nav: true, title: 'Results' },
    ]);

    this.router = router;
  }
}
