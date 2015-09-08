import {inject} from 'aurelia-dependency-injection';

@inject(HTMLIFrameElement)
export class MacroRunner {
  constructor(iframe) {
    this.iframe = iframe;
  }

  run(name) {
    return new Promise((resolve, reject) => {
      let start, finish;

      let handleMessage = event => {
        if (event.data === 'test-start') {
          start = new Date();
          return;
        }
        if (event.data !== 'test-end') {
          return;
        }
        finish = new Date();

        window.removeEventListener('message', handleMessage)
        this.iframe.src = 'about:blank';

        resolve({ period: (finish - start) / 1000.0, heapSizeDeltas: [] });
      };

      window.addEventListener('message', handleMessage);
      this.iframe.src = `/benchmarks/macro/${name}/index.html`;
    });
  }
}
