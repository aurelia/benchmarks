import {bindable, customElement} from 'aurelia-framework';

@customElement('result-set')
export class ResultSet {
  @bindable results;

  textClass(result) {
    let change = this.compare(result);
    return !change || change.same ? 'text-muted' : (change.improved ? 'text-success' : 'text-danger');
  }

  compare(result) {
    var previous = this.getPrevious(result);
    if (previous) {
      let p = (result.period - previous.period) / previous.period * 100;
      return {
        same: Math.abs(p) <= 15,
        improved: p < -15,
        percentImprovement: p
      }
    }
    return null;
  }

  getPrevious(result) {
    let i = this.results.indexOf(result);
    return this.results[i + 1];
  }
}
